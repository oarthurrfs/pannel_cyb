# Sentinel Desk — User Guide

Sentinel Desk is a lightweight phishing detector with a threat-review panel. Paste a suspicious email, SMS, web page text, or URL and it highlights social-engineering patterns, risky links, credential theft, payment scams, and other phishing signals — then shows you a risk score and what to do next.

It runs entirely in the browser: nothing you paste is uploaded, stored, or sent anywhere.

---

## 1. What the app does

- **Analyzes suspicious content** — email, SMS, website text, or a bare URL.
- **Matches it against nine threat categories** (see [Threat library](#5-threat-library) below).
- **Scores the risk** from 0 to 100 and labels it Low, Moderate, High, or Critical.
- **Shows the evidence** — the exact words or patterns that triggered each category.
- **Recommends actions** based on what was found.
- **Keeps a short history** of your last five scans for quick reference.

---

## 2. Opening the app

Open `index.html` in any modern browser. There is no install step, no login, and no server required.

The page has three main areas:

| Area | What it's for |
| --- | --- |
| **Header status cards** | A running count of threats cataloged and the highest severity seen so far |
| **Detector** | Where you paste content and run a scan |
| **Threat Panel** | The results of your scan: risk score, signals, evidence, and actions |
| **Threat library** | A reference list of every threat category the detector monitors |

---

## 3. Running a scan

1. **Choose the threat source** — Email, SMS, Website, or URL only. This tells the detector how to interpret what you paste. Choosing *URL only* adds a small amount of risk to the score, because a bare link gives no context to weigh it against.
2. **Enter the sender or domain** (optional but recommended). For example: `billing-alert@secure-payments-example.com`. The sender is checked for lookalike and typosquatting patterns, so including it improves detection.
3. **Paste the suspicious content** into the large text box — the full message body, page text, or email headers.
4. **Click Run detection.**

### Not sure where to start?

Click **Load sample** in the Detector header. It fills the form with a realistic phishing example and runs the scan, so you can see how the panel behaves before trying your own content.

---

## 4. Reading the results

### Risk score and status

The panel shows a score from **0 to 100** with a status label:

| Score | Status | Meaning |
| --- | --- | --- |
| 75–100 | **Critical risk** | Strong evidence of phishing. Treat as hostile. |
| 45–74 | **High risk** | Multiple strong indicators. Do not interact until verified. |
| 20–44 | **Moderate risk** | Some suspicious patterns. Verify the sender independently. |
| 0–19 | **Low risk** | Little or no matching evidence — but stay cautious. |

How the score is built:

- Each matched threat category adds points: **High severity +28**, **Medium +16**, **Low +8**.
- A **URL-only** submission adds **+12**.
- A message that contains a **link plus words like "login", "verify", "password", or "account"** adds **+18**.
- The total is capped at 100.

### Intent signals

Each matched category is listed with its severity, a short description, and the **evidence** — the actual words or patterns found in your content. This is what you would quote if you escalate the message to a security team.

### Recommended actions

Plain-language next steps generated from what matched, for example:

- Quarantine the message and block user interaction.
- Do not enter passwords or MFA codes; reset credentials and review sign-in logs.
- Inspect the destination domain and compare it with the legitimate brand domain.
- Do not open attachments until the sender and file type are validated.
- Verify payment or refund requests through a separate trusted channel.

If nothing matched, the panel says so and reminds you to validate the sender independently.

### Recent threats

Every scan is added to the top of the list (up to five entries), showing the sender, source type, risk score, and how many categories matched. The list lives in the page only — it clears when you reload.

### Header status cards

- **Threats cataloged** — how many threat categories the most recent scan matched.
- **Highest severity** — the most severe category in the most recent scan.

---

## 5. Threat library

The bottom of the page lists every category the detector monitors:

| Category | Severity | Looks for |
| --- | --- | --- |
| Credential Theft | High | Password-reset tricks, fake login prompts, MFA/OTP harvesting, "verify your account" requests |
| Brand or Executive Impersonation | High | Messages posing as a bank, delivery service, cloud provider, CEO, or finance team |
| Urgency and Pressure Tactics | Medium | Countdown language, threats of suspension, "act immediately" pressure |
| Payment and Invoice Fraud | High | Wire transfers, gift cards, crypto payments, fake invoices, refund scams |
| Suspicious Link Behavior | High | Shortened links, IP-address URLs, misleading download destinations |
| Attachment or File Bait | Medium | Pressure to open ZIP/RAR/macro or password-protected files |
| Sensitive Data Harvesting | High | Requests for SSNs, card numbers, bank details, passports, employee data |
| QR and Device Redirect Phishing | Medium | "Scan this QR code" or "complete verification on your phone" lures |
| Typosquatting or Lookalike Domains | Medium | Sender domains imitating trusted brands with extra words, digits, or odd spelling |

---

## 6. Tips for best results

- Paste the **whole message**, including greeting, body, and any signature — context improves matching.
- Include **headers or the full sender address** when you have them; lookalike-domain detection depends on it.
- Scan **URLs separately** from message text if you want to see how much risk the link alone carries.
- Treat a **low score as "no strong evidence", not as "safe"**. A short, well-written phishing attempt can pass a pattern-based check.

---

## 7. Limitations

No pattern-based detector can guarantee it catches every malicious message. Sentinel Desk is a prototype and a starting point. Real-world protection should also include:

- URL reputation checks
- Sandboxed attachment analysis
- Domain intelligence and registration-age checks
- Machine-learning classification
- Email authentication checks (SPF, DKIM, DMARC)
- A formal analyst review and escalation workflow

Use Sentinel Desk to triage and to explain *why* something looks suspicious — not as your only line of defense.
