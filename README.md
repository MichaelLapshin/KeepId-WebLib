# KeepId-WebLib
Repository for storing the code of the javascript library used to initiate KeepId data requests.

# How to add the library to your website
1. Install the JavaScript API client
   * Install via HTML using a CDN (note: We can host the download link ourselves) <br />
       `<script src="[CND download link]"></script>`
   * Install via npm <br />
     `npm install keepid`
2. Use the client
     ```
     const keepid = requre('keepid')
     const client = keepid('OrganizationPIN', 'RequesterID', 'TemplateType')
     ```
