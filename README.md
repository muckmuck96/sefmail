# sefmail

Send mails through the [SimpleMailerAPI](https://mail.asss.ist/) for simple mail send for free. No need of a mailserver.

## Install
    
    npm i sefmail

## Usage

    var sefMail = require("sefmail");

    // Requires an api token which you can get from the SimpleMailerAPI Site
    sefMail.config.apiToken = 'YOUR_API_TOKEN';

    // Send a mail
    sefMail.mail(from, to, subject, content, callback);

## sefMail.mail() parameters

* **from** is the sender of the mail with a syntax of `Name <Mail>`
* **to** is the receiver of the mail with a syntax of `Name <Mail>`
* **subject** is the subject of the mail
* **content** is the content of the mail
* **callback** is the callback function - `callback(response)`

## License
[ISC](LICENSE.md)