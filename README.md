<div align="center">

# WhatsApp Member Exporter

### Export visible WhatsApp Web group members to an Excel-friendly CSV

A lightweight, privacy-focused Chrome Extension for legitimate community, society, residential, and organizational use.

<p>
  <a href="#-features"><img src="https://img.shields.io/badge/Features-8-128C7E?style=for-the-badge" alt="Features"></a>
  <a href="#-installation"><img src="https://img.shields.io/badge/Chrome-Manifest%20V3-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Chrome Manifest V3"></a>
  <a href="#-privacy"><img src="https://img.shields.io/badge/Privacy-Local%20Processing-2EA44F?style=for-the-badge" alt="Privacy"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="MIT License"></a>
</p>

<p>
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-how-it-works">How It Works</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-privacy">Privacy</a> •
  <a href="#-contributing">Contributing</a>
</p>

</div>

---

> **Important:** This project is intended for authorized and responsible use. Only collect or use member information when you have an appropriate legitimate purpose and authorization.

## 📸 At a glance

![WhatsApp Member Exporter workflow guide](assets/workflow-guide.png)

<details>
<summary><strong>What the extension does</strong></summary>

The extension reads member information that WhatsApp Web makes visible in the currently opened group's member list, processes it locally in the browser, and exports the result as CSV.

It is designed to avoid the need for manual copy/paste across hundreds of members.

</details>

---

## ✨ Features

| Feature | Description |
|---|---|
| 👤 **Member names** | Extract displayed member names where available |
| ☎️ **Unsaved numbers** | Extract phone numbers shown in the member list |
| 🇮🇳 **+91 formatting** | Normalize Indian mobile numbers |
| ♻️ **Duplicate handling** | Keep one record per phone number during a scan |
| 👥 **Group detection** | Include the current group name in the export |
| 👀 **Preview** | Review extracted records before downloading |
| 📊 **CSV export** | Open the result in Excel, Google Sheets, or LibreOffice |
| 🔒 **Local processing** | No project backend is required |

---

## 🚀 Quick Start

### 1. Download the project

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/whatsapp-society-member-exporter.git
cd whatsapp-society-member-exporter
```

Or use **Code → Download ZIP** on GitHub.

### 2. Load the extension in Chrome

1. Open Chrome.
2. Visit `chrome://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the project's `extension` folder.

You should now see **WhatsApp Member Exporter** in your extensions list.

---

## 📱 Usage

### Step 1 — Open WhatsApp Web

Open WhatsApp Web and sign in normally.

### Step 2 — Open your group

Open the WhatsApp group for which you are authorized to export member information.

### Step 3 — Open the member list

Go to:

```text
Group Info
    ↓
View all members
```

Keep the member panel open.

### Step 4 — Start the scan

Click the **WhatsApp Member Exporter** extension and select:

**Scan current group**

The extension scrolls through the member list and collects available phone numbers.

### Step 5 — Review

The extension displays a small preview of the extracted records.

### Step 6 — Export

Click:

**Download CSV**

The resulting CSV can be opened in Excel.

---

## 🔄 How It Works

```text
┌──────────────────────┐
│     WhatsApp Web     │
│    Group / Members   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   Chrome Extension   │
│   Reads visible UI   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    Local Processing  │
│                      │
│  • Name extraction   │
│  • Phone formatting  │
│  • Deduplication     │
│  • Group detection   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       Preview        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│      CSV Export      │
│   Excel / Sheets     │
└──────────────────────┘
```

### Data flow

**WhatsApp Web → Extension → Local browser processing → Preview → CSV**

The project does not require a separate backend server.

---

## 📊 Example Output

```csv
Name,Phone,Group
Rahul Sharma,+919812345678,Society Group
Neha Gupta,+919876543210,Society Group
Amit Kumar,+917012345678,Society Group
```

### Excel

| Name | Phone | Group |
|---|---|---|
| Rahul Sharma | +919812345678 | Society Group |
| Neha Gupta | +919876543210 | Society Group |
| Amit Kumar | +917012345678 | Society Group |

Phone numbers are exported in a way intended to prevent Excel from converting them into scientific notation.

---

## 🧩 Project Structure

```text
whatsapp-society-member-exporter/
│
├── extension/
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   └── content.js
│
├── assets/
│   └── workflow-guide.png
│
├── README.md
├── LICENSE
└── .gitignore
```

---

## 🔐 Privacy

Privacy is a core design goal of this project.

### The extension is designed to process extracted information locally

The project does not intentionally:

- upload extracted member information to a remote server
- store member data in a project-owned database
- collect WhatsApp passwords
- collect WhatsApp QR codes
- collect WhatsApp authentication cookies
- send extracted member lists to a third-party service

The CSV is downloaded to the user's own computer.

### User responsibility

Names and phone numbers are personal information.

Users are responsible for:

- having an appropriate purpose for collecting the information
- having appropriate authorization where required
- handling exported files securely
- complying with applicable privacy laws and organizational policies
- respecting the expectations of group members

**Never commit real member CSV files to this GitHub repository.**

---

## 🔐 Chrome Permissions

The extension uses:

### `activeTab`

Used to interact with the currently active browser tab when the user starts the extension.

### `scripting`

Used to execute the local extraction code in the active WhatsApp Web page.

### Host access

```text
https://web.whatsapp.com/*
```

This is required for the extension to operate on WhatsApp Web.

---

## ⚠️ Limitations

WhatsApp Web is a continuously changing web application.

Changes to its interface, DOM structure, participant-list behavior, or privacy controls may require updates to this project.

The extension:

- does not bypass WhatsApp account security
- does not access WhatsApp's private backend APIs
- does not attempt to obtain hidden account information
- only works with information made available to the browser through the supported web interface

---

## 🛠️ Technology

Built with standard web technologies:

- HTML
- CSS
- JavaScript
- Chrome Extensions Manifest V3

No backend is required.

---

## 🧪 Development

To test changes locally:

1. Edit the files inside `extension/`.
2. Open `chrome://extensions`.
3. Click **Reload** on the extension.
4. Refresh WhatsApp Web if necessary.
5. Open a test group/member list.
6. Run a scan.

### Testing recommendation

Use a test environment or non-sensitive sample data while developing.

Do not commit real phone numbers, names, exported CSV files, cookies, or WhatsApp session information.

---

## 🤝 Contributing

Contributions are welcome.

### Report a bug

Open a GitHub Issue and include:

- Chrome version
- Extension version
- What you expected
- What happened
- Console/error message if available
- A screenshot if useful

**Please remove or blur phone numbers, names, profile photos, and other personal information before uploading screenshots.**

### Pull requests

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the extension.
5. Commit your changes.
6. Open a pull request.

---

## 🗺️ Roadmap

Potential future improvements:

- [ ] Real-time scan progress
- [ ] Stop / cancel scan
- [ ] Export directly to `.xlsx`
- [ ] Merge multiple group exports
- [ ] Cross-group duplicate detection
- [ ] Better member-name detection
- [ ] Configurable country-code handling
- [ ] Improved accessibility
- [ ] Chrome Web Store release
- [ ] Automated regression tests for extraction logic

---

## 📜 License

This project is licensed under the **MIT License**.

See [`LICENSE`](LICENSE) for details.

---

## ⚖️ Disclaimer

This is an independent third-party project.

It is **not affiliated with, endorsed by, sponsored by, or officially connected to WhatsApp or Meta Platforms, Inc.**

WhatsApp is a trademark of Meta Platforms, Inc.

Use this project responsibly and in accordance with applicable laws, platform rules, and the expectations of group members.

---

<div align="center">

### ⭐ If this project is useful, consider starring the repository.

**Built for practical community management. Designed with local processing in mind.**

</div>
