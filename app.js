const threatLibrary = [
  {
    id: "credential-theft",
    title: "Credential Theft",
    severity: "high",
    description: "Looks for password-reset tricks, fake login prompts, MFA harvesting, and requests to verify accounts.",
    patterns: [/password/gi, /login/gi, /verify\s+your\s+account/gi, /mfa|otp|2fa/gi]
  },
  {
    id: "impersonation",
    title: "Brand or Executive Impersonation",
    severity: "high",
    description: "Flags messages that pretend to be a bank, delivery service, cloud provider, or company leader.",
    patterns: [/ceo/gi, /finance team/gi, /microsoft|google|paypal|bank|dhl|fedex/gi, /from the security team/gi]
  },
  {
    id: "urgent-pressure",
    title: "Urgency and Pressure Tactics",
    severity: "medium",
    description: "Detects countdown language, threats of suspension, and pressure to act immediately.",
    patterns: [/urgent/gi, /immediately/gi, /within\s+\d+\s+hours/gi, /suspended|disabled|locked/gi]
  },
  {
    id: "financial-fraud",
    title: "Payment and Invoice Fraud",
    severity: "high",
    description: "Finds requests for wire transfers, gift cards, crypto payments, fake invoices, and refund scams.",
    patterns: [/wire transfer/gi, /gift card/gi, /bitcoin|crypto/gi, /invoice/gi, /refund/gi]
  },
  {
    id: "malicious-link",
    title: "Suspicious Link Behavior",
    severity: "high",
    description: "Examines shortened links, IP-based URLs, mismatched domains, and misleading download destinations.",
    patterns: [/bit\.ly|tinyurl|t\.co/gi, /https?:\/\/\d{1,3}(\.\d{1,3}){3}/gi, /download/gi, /secure-update/gi]
  },
  {
    id: "attachment-bait",
    title: "Attachment or File Bait",
    severity: "medium",
    description: "Detects pressure to open files such as invoices, macros, ZIP archives, or password-protected documents.",
    patterns: [/attached/gi, /\.zip|\.rar|\.html|\.docm|\.xlsm/gi, /macro/gi, /password-protected/gi]
  },
  {
    id: "data-harvest",
    title: "Sensitive Data Harvesting",
    severity: "high",
    description: "Flags attempts to collect SSNs, bank details, card numbers, employee data, or identity documents.",
    patterns: [/social security/gi, /credit card/gi, /bank details/gi, /passport/gi, /employee data/gi]
  },
  {
    id: "qr-phishing",
    title: "QR and Device Redirect Phishing",
    severity: "medium",
    description: "Catches lures that tell users to scan a QR code or use a mobile device to complete verification.",
    patterns: [/qr code/gi, /scan with your phone/gi, /mobile verification/gi, /device enrollment/gi]
  },
  {
    id: "typosquat",
    title: "Typosquatting or Lookalike Domains",
    severity: "medium",
    description: "Detects suspicious sender domains that imitate trusted brands with extra words, numbers, or odd spelling.",
    patterns: [/@[a-z0-9.-]*(secure|login|verify|support)[a-z0-9.-]*\./gi, /paypaI|micr0soft|g00gle/gi]
  }
];

const severityRank = { low: 1, medium: 2, high: 3 };

const sampleThreat = {
  source: "email",
  sender: "billing-alert@paypaI-security-check.com",
  content:
    "Urgent: your account will be suspended within 4 hours. Verify your login now to avoid disruption. " +
    "Open the attached invoice.html or visit https://bit.ly/secure-update and confirm your password, OTP, and credit card details. " +
    "If you do not act immediately, your refund will be canceled."
};

const form = document.getElementById("detector-form");
const sourceType = document.getElementById("source-type");
const senderInput = document.getElementById("sender-input");
const contentInput = document.getElementById("content-input");
const sampleButton = document.getElementById("sample-button");

const threatCount = document.getElementById("threat-count");
const highestSeverity = document.getElementById("highest-severity");
const riskScore = document.getElementById("risk-score");
const riskStatus = document.getElementById("risk-status");
const signalsList = document.getElementById("signals-list");
const actionsList = document.getElementById("actions-list");
const historyList = document.getElementById("history-list");
const libraryGrid = document.getElementById("library-grid");
const scanHistory = [];

function analyzeThreat({ sender, content, source }) {
  const haystack = `${sender} ${content}`.trim();
  const matches = threatLibrary
    .map((threat) => {
      const evidence = threat.patterns
        .map((pattern) => haystack.match(pattern))
        .filter(Boolean)
        .flat()
        .slice(0, 4);

      return evidence.length > 0
        ? {
            ...threat,
            evidence
          }
        : null;
    })
    .filter(Boolean);

  let score = 0;
  for (const match of matches) {
    score += match.severity === "high" ? 28 : match.severity === "medium" ? 16 : 8;
  }

  if (source === "url") {
    score += 12;
  }

  if (/https?:\/\//i.test(content) && /login|verify|password|account/i.test(content)) {
    score += 18;
  }

  score = Math.min(score, 100);

  const status =
    score >= 75 ? "Critical risk" :
    score >= 45 ? "High risk" :
    score >= 20 ? "Moderate risk" :
    "Low risk";

  const actions = buildActions(matches, score);

  return {
    matches,
    score,
    status,
    highest: matches.reduce((current, next) => {
      if (!current || severityRank[next.severity] > severityRank[current]) {
        return next.severity;
      }
      return current;
    }, "low"),
    actions
  };
}

function buildActions(matches, score) {
  const actions = [];

  if (score >= 75) {
    actions.push("Quarantine this message or URL immediately and block user interaction.");
  }

  if (matches.some((item) => item.id === "credential-theft")) {
    actions.push("Do not enter passwords or MFA codes. Reset exposed credentials and review sign-in logs.");
  }

  if (matches.some((item) => item.id === "malicious-link" || item.id === "typosquat")) {
    actions.push("Inspect the destination domain carefully and compare it with the legitimate brand domain.");
  }

  if (matches.some((item) => item.id === "attachment-bait")) {
    actions.push("Do not open attachments until the sender and file type are validated in a safe environment.");
  }

  if (matches.some((item) => item.id === "financial-fraud")) {
    actions.push("Verify payment or refund requests through a separate trusted channel before taking action.");
  }

  if (actions.length === 0) {
    actions.push("No strong malicious pattern matched, but keep monitoring and validate the sender independently.");
  }

  return actions;
}

function severityLabel(severity) {
  return severity.charAt(0).toUpperCase() + severity.slice(1);
}

function renderLibrary() {
  libraryGrid.innerHTML = "";

  for (const threat of threatLibrary) {
    const card = document.createElement("article");
    card.className = "library-card";
    card.innerHTML = `
      <div class="library-card__header">
        <h3>${threat.title}</h3>
        <span class="tag tag--${threat.severity}">${severityLabel(threat.severity)}</span>
      </div>
      <p>${threat.description}</p>
      <span class="library-card__meta">Panel category: ${threat.id}</span>
    `;
    libraryGrid.appendChild(card);
  }
}

function renderResult(result) {
  threatCount.textContent = String(result.matches.length);
  highestSeverity.textContent = severityLabel(result.highest);
  riskScore.textContent = String(result.score);
  riskStatus.textContent = result.status;

  signalsList.innerHTML = "";
  actionsList.innerHTML = "";

  if (result.matches.length === 0) {
    const empty = document.createElement("li");
    empty.className = "signal-list__empty";
    empty.textContent = "No phishing pattern matched the current content.";
    signalsList.appendChild(empty);
  } else {
    for (const match of result.matches) {
      const item = document.createElement("li");
      item.innerHTML = `
        <div class="signal-header">
          <strong>${match.title}</strong>
          <span class="tag tag--${match.severity}">${severityLabel(match.severity)}</span>
        </div>
        <p>${match.description}</p>
        <p class="signal-evidence"><strong>Evidence:</strong> ${match.evidence.join(", ")}</p>
      `;
      signalsList.appendChild(item);
    }
  }

  for (const action of result.actions) {
    const item = document.createElement("li");
    item.textContent = action;
    actionsList.appendChild(item);
  }
}

function renderHistory() {
  historyList.innerHTML = "";

  if (scanHistory.length === 0) {
    const empty = document.createElement("li");
    empty.className = "history-list__empty";
    empty.textContent = "Your scanned threats will be listed here.";
    historyList.appendChild(empty);
    return;
  }

  for (const entry of scanHistory) {
    const item = document.createElement("li");
    item.className = "history-item";
    item.innerHTML = `
      <div class="signal-header">
        <strong>${entry.sender || "Unknown sender"}</strong>
        <span class="tag tag--${entry.highest}">${severityLabel(entry.highest)}</span>
      </div>
      <p>${entry.source.toUpperCase()} scan with score ${entry.score}. Matched ${entry.matches.length} threat categories.</p>
    `;
    historyList.appendChild(item);
  }
}

function recordHistory(payload, result) {
  scanHistory.unshift({
    sender: payload.sender,
    source: payload.source,
    score: result.score,
    highest: result.highest,
    matches: result.matches
  });

  if (scanHistory.length > 5) {
    scanHistory.pop();
  }

  renderHistory();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const payload = {
    sender: senderInput.value,
    content: contentInput.value,
    source: sourceType.value
  };
  const result = analyzeThreat(payload);

  renderResult(result);
  recordHistory(payload, result);
});

sampleButton.addEventListener("click", () => {
  sourceType.value = sampleThreat.source;
  senderInput.value = sampleThreat.sender;
  contentInput.value = sampleThreat.content;

  const result = analyzeThreat(sampleThreat);
  renderResult(result);
  recordHistory(sampleThreat, result);
});

renderLibrary();
renderHistory();
