# 🛡️ Sentinel Desk

### Phishing Detection & Threat Analysis Dashboard

**Sentinel Desk** is a lightweight cybersecurity prototype designed to analyze potentially malicious content such as emails, SMS messages, website text, and URLs.

The project identifies common phishing and social-engineering patterns and presents the analysis through an intuitive **Threat Access Panel**, providing a severity level, risk score, evidence, and recommended actions.

> ⚠️ **Disclaimer:** Sentinel Desk is a prototype for educational and defensive cybersecurity purposes. It should not be considered a complete replacement for professional security solutions.

---

## 📌 Overview

Phishing attacks commonly rely on social engineering techniques to convince users to reveal credentials, make payments, open malicious links, or provide sensitive information.

Sentinel Desk was created to provide a simple interface where suspicious content can be submitted and analyzed for potentially malicious characteristics.

The system focuses on identifying patterns commonly associated with:

* 🎣 Credential theft
* 👤 Impersonation
* 🚨 Urgency and pressure tactics
* 💳 Invoice and payment fraud
* 🔗 Suspicious or malicious links
* 📥 Data harvesting
* 🕵️ Other social-engineering indicators

---

## ✨ Features

### 🔍 Threat Analysis

Submit suspicious content such as:

* Emails
* SMS messages
* Website content
* URLs
* Other potentially malicious text

The application analyzes the submitted content and searches for known malicious-intent patterns.

### 📊 Threat Panel

The dashboard provides an analysis containing:

* **Threat severity**
* **Risk score**
* **Detected evidence**
* **Threat category**
* **Recommended actions**

This allows the user to quickly understand why a piece of content may be considered suspicious.

### 📚 Threat Library

Sentinel Desk includes a visible threat library containing the monitored threat categories.

This allows analysts and users to quickly access and understand the different types of threats that the system is designed to identify.

---

## 🧠 Detection Categories

The prototype currently focuses on several common phishing indicators.

| Threat              | Description                                                                   |
| ------------------- | ----------------------------------------------------------------------------- |
| 🎣 Credential Theft | Attempts to obtain passwords, login credentials or authentication information |
| 👤 Impersonation    | Attempts to imitate companies, institutions, employees or trusted individuals |
| 🚨 Urgency          | Pressure tactics designed to force the victim to act quickly                  |
| 💳 Invoice Fraud    | Suspicious payment, billing or invoice-related requests                       |
| 🔗 Malicious Links  | Suspicious URLs or links designed to redirect victims                         |
| 📥 Data Harvesting  | Attempts to collect personal, financial or sensitive information              |

---

## 🖥️ Interface

The project provides a security-focused dashboard designed to make threat analysis simple and accessible.

The interface is built around the following workflow:

```text
┌──────────────────────┐
│  Suspicious Content  │
│       Submission     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   Threat Detection   │
│      & Analysis      │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    Risk Evaluation   │
│ Severity + Evidence  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   Recommended Action │
└──────────────────────┘
```

---

## 🛠️ Technologies

Sentinel Desk is currently implemented as a lightweight web application using:

* **HTML5** — Application structure
* **CSS3** — Interface and visual design
* **JavaScript** — Detection logic and application behavior

### Project structure

```text
pannel_cyb/
│
├── index.html
├── styles.css
├── app.js
└── README.md
```

---

## 🚀 Getting Started

### Requirements

No server or database is currently required to run the prototype.

You only need a modern web browser.

### 1. Clone the repository

```bash
git clone https://github.com/oarthurrfs/pannel_cyb.git
```

### 2. Enter the project directory

```bash
cd pannel_cyb
```

### 3. Run the application

Simply open:

```text
index.html
```

in your preferred browser.

You can also use a local development server such as **VS Code Live Server**.

---

## 🔎 Example Workflow

A typical analysis can follow this process:

**1. Submit suspicious content**

```text
Your account will be suspended.
Verify your credentials immediately:
https://example.com/login
```

**2. Sentinel Desk analyzes the content**

The detector searches for indicators such as:

* Urgent language
* Credential requests
* Suspicious links
* Account-related impersonation

**3. Threat panel displays the result**

The user receives:

```text
Threat: Credential Theft

Severity: High

Risk Score: XX/100

Evidence:
- Credential request
- Urgency indicator
- Suspicious URL

Recommended Action:
Do not provide credentials or open the suspicious link.
```

---

## ⚠️ Security Limitations

Sentinel Desk is currently a **prototype** and should not be considered a complete phishing-detection system.

Pattern-based detection can produce:

* False positives
* False negatives
* Incomplete threat classification

A message that appears safe may still contain malicious content, while legitimate messages may sometimes trigger detection rules.

For real-world protection, additional security mechanisms should be implemented.

---

## 🔐 Future Improvements

Potential improvements include:

* [ ] URL reputation analysis
* [ ] Domain intelligence
* [ ] WHOIS/domain-age analysis
* [ ] DNS security checks
* [ ] SPF verification
* [ ] DKIM verification
* [ ] DMARC verification
* [ ] Malicious URL databases
* [ ] Attachment sandbox analysis
* [ ] Machine-learning classification
* [ ] Natural-language threat analysis
* [ ] Threat intelligence APIs
* [ ] User authentication
* [ ] Analyst accounts
* [ ] Threat history
* [ ] Analysis reports
* [ ] Export results as PDF
* [ ] API integration
* [ ] Backend/database
* [ ] Real-time threat intelligence

---

## 🧩 Roadmap

### Phase 1 — Prototype

* [x] Web interface
* [x] Suspicious-content submission
* [x] Threat pattern detection
* [x] Risk evaluation
* [x] Threat panel
* [x] Threat library

### Phase 2 — Intelligence

* [ ] URL reputation
* [ ] Domain analysis
* [ ] Threat intelligence APIs
* [ ] Email authentication analysis

### Phase 3 — Advanced Detection

* [ ] Machine-learning classification
* [ ] NLP-based analysis
* [ ] Automated threat correlation
* [ ] Advanced scoring engine

### Phase 4 — Security Platform

* [ ] Backend infrastructure
* [ ] Database
* [ ] User authentication
* [ ] Analyst dashboard
* [ ] Threat history
* [ ] Reporting system
* [ ] REST API

---

## 🎯 Project Objective

The main objective of Sentinel Desk is to provide a simple and accessible environment for **learning, experimenting with, and demonstrating phishing detection concepts**.

The project can also serve as a foundation for developing a more comprehensive cybersecurity analysis platform.

---

## 🤝 Contributing

Contributions, suggestions and improvements are welcome.

To contribute:

```bash
# Fork the repository

# Clone your fork
git clone https://github.com/YOUR-USERNAME/pannel_cyb.git

# Create a new branch
git checkout -b feature/new-feature

# Make your changes

# Commit
git commit -m "feat: add new threat detection rule"

# Push
git push origin feature/new-feature
```

Then open a Pull Request.

---

## 📄 License

Add the appropriate license to this repository before distributing the project publicly.

---

## 👨‍💻 Author

**Arthur Freire**

GitHub:
https://github.com/oarthurrfs

---

## ⭐ Support

If you find **Sentinel Desk** useful, consider giving the repository a ⭐ on GitHub.

Every contribution, suggestion and feedback helps improve the project.

---

### 🛡️ Sentinel Desk

**Detect. Analyze. Respond.**
