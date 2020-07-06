const fetch = require('fetch');
module.exports.config = {
    apiToken: undefined
};
exports.mail = function(from, to, subject, content, callback) {
    if(this.config.apiToken == undefined) throw 'No API token given';
    if(!from.includes('<') || !from.includes('>')) throw 'from field should be in this syntax: Max Mustermann <max@mustermann.com>';
    if(to.includes('<') || to.includes('>')) throw 'to field should be in this syntax: max@mustermann.com';
    let fromSplit = from.split('<');
    let sender_name = fromSplit[0];
    let sender_mail = fromSplit[1].substr(0, fromSplit[1].length - 1);
    fetch.fetchUrl('https://api.mail.asss.ist/?token=' + this.config.apiToken + '&req=get&sender_name=' + sender_name + '&sender_mail=' + sender_mail + '&receiver_mail=' + to + '&subject=' + subject + '&content=' + content, function(error, meta, body) {
        let response = JSON.parse(body.toString());
        callback(response);
    });
}