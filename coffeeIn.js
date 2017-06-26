var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var json = require('/home/pi/Documents/coffee/coffeeIn.json')

var xhr = new XMLHttpRequest();
var url = 'https://hooks.slack.com/services/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';
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-type', 'application/json');

var data = JSON.stringify(json);
xhr.send(data);

