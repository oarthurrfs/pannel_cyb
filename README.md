# Sentinel Desk

Sentinel Desk is a lightweight phishing detector prototype with a threat-access panel.

## What it does

- Accepts suspicious email, SMS, website text, or URL submissions
- Detects multiple malicious-intent patterns such as credential theft, impersonation, urgent pressure, invoice fraud, bad links, and data harvesting
- Shows a threat panel with severity, evidence, risk score, and recommended actions
- Includes a visible threat library so the analyst can access each monitored threat category

## Run locally

Open `index.html` in a browser.

## Important note

No detector can guarantee detection of every malicious intention. This prototype is designed to be extensible and useful as a starting point, but real-world protection should also include:

- URL reputation checks
- sandboxed attachment analysis
- domain intelligence
- machine-learning classification
- email authentication checks like SPF, DKIM, and DMARC
- analyst review workflows
