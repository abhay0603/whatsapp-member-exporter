# WhatsApp Society Member Exporter

A privacy-focused Chrome extension for exporting visible WhatsApp Web group member information to CSV.

## Features

- Extract visible WhatsApp group member names
- Extract phone numbers, including unsaved numbers
- Automatically format Indian phone numbers with `+91`
- Remove duplicate phone numbers
- Detect the current group name
- Preview extracted members
- Export data to CSV
- Excel-compatible phone number formatting
- Runs locally in the browser
- No WhatsApp password required
- No external server required

## How It Works

The extension reads member information that is visible in the WhatsApp Web group member list.

The extracted information is processed locally in the browser and can be exported as a CSV file.

## Installation

### Chrome Extension Developer Mode

1. Download or clone this repository.
2. Open Chrome.
3. Visit:

   `chrome://extensions`

4. Enable **Developer mode**.
5. Click **Load unpacked**.
6. Select the `extension` folder.

## Usage

1. Open WhatsApp Web.
2. Open the required WhatsApp group.
3. Open **Group Info**.
4. Click **View all members**.
5. Open the extension.
6. Click **Scan current group**.
7. Wait for the scan to finish.
8. Review the preview.
9. Click **Download CSV**.

## Output

The exported CSV contains:

| Name | Phone | Group |
|------|-------|-------|
| Member Name | +919XXXXXXXXX | Society Group |

## Privacy

This extension processes extracted information locally in the user's browser.

The extension does not intentionally upload extracted member information to an external server.

Users are responsible for ensuring that they have appropriate authorization and a legitimate purpose for collecting and using group member information.

Do not upload exported member lists containing personal phone numbers to public repositories.

## Permissions

The extension uses the following Chrome permissions:

- `activeTab`
- `scripting`

It also operates on:

- `https://web.whatsapp.com/*`

These permissions are used to read the currently visible WhatsApp Web member list and perform the extraction.

## Disclaimer

This project is an independent third-party tool and is not affiliated with, endorsed by, or sponsored by WhatsApp or Meta.

Use the extension responsibly and in accordance with applicable laws, WhatsApp's terms, and the expectations of group members.

## License

MIT License
