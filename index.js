const fetch = require('fetch');
module.exports.config = {
    apiToken: undefined
};
exports.mail = function(from, to, subject, content, callback) {
    if(this.config.apiToken == undefined) throw 'No API token given';
    if(!from.includes('<') || !from.includes('>')) throw 'from field should be in this syntax: Name <Mail>';
    if(!to.includes('<') || !to.includes('>')) throw 'to field should be in this syntax: Name <Mail>';
    let fromSplit = from.split(' ');
    let sender_name = fromSplit[0];
    let sender_mail = fromSplit[1].substr(1, fromSplit[1].length - 1);
    let toSplit = to.split(' ');
    let receiver_name = toSplit[0];
    let receiver_mail = toSplit[1].substr(1, toSplit[1].length - 1);
    fetch.fetchUrl('https://api.mail.asss.ist/?token=' + this.config.apiToken + '&req=get&sender_name=' + sender_name + '&sender_mail=' + sender_mail + '&receiver_name=' + receiver_name + '&receiver_mail=' + receiver_mail + '&subject=' + subject + '&content=' + content, function(error, meta, body) {
        let response = JSON.parse(body.toString());
        callback(response);
    });
}