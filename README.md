# sefmail

Send mails through the [SimpleMailerAPI](https://mail.asss.ist/) for simple mail send for free. No need of a mailserver.

## Install
```bash
npm i sefmail
```
## Usage
```javascript
var sefMail = require("sefmail");

// Requires an api token which you can get from the SimpleMailerAPI Site
sefMail.config.apiToken = 'YOUR_API_TOKEN';

// Send a mail
sefMail.mail(from, to, subject, content, callback);
```
## `sefMail.mail()` parameters

| param | syntax | description |
| ------| ------- | ----------- |
| from | `Max Mustermann <max@mustermann.com>` | the sender of the mail |
| to | `max@mustermann.com` | the receiver of the mail |
| subject | - | the subject of the mail |
| content | - | the content of the mail |
| callback | `callback(response)` | the callback function on execution | 

## License

[ISC](LICENSE.md)
