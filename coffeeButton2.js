var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var slackOut = require('/home/pi/Documents/coffee/coffeeOut.json');
var slackIn = require('/home/pi/Documents/coffee/coffeeIn.json');
var Cylon = require('cylon');

Cylon.robot({

connections: {
    raspi: { adaptor: 'raspi' }
    },

devices: {
    redButton: { driver: 'button', pin: 12 },
    blueButton: { driver: 'button', pin: 16 },
    },

work: function(my) {
    var xhr = new XMLHttpRequest();
    var url = 'https://hooks.slack.com/services/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';

    my.redButton.on('push', function() {
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var data = JSON.stringify(slackOut);
    xhr.send(data); 
    });

    my.blueButton.on('push', function() {
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var data = JSON.stringify(slackIn);
    xhr.send(data);
    });
}

}).start();
