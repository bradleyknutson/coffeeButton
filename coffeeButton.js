var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var slackOut = require('/home/pi/Documents/coffeeButton/coffeeOut.json');
var slackIn = require('/home/pi/Documents/coffeeButton/coffeeIn.json');
var Cylon = require('cylon');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'bknutson'
  password: 'v4mnBF%U$r23VtrX',
  database: 'coffeeDb'
})

con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO coffeeStatus (available) VALUES ('yes')";
  con.query(sql, function(err,result) {
    if (err) throw err;
  });
});


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

    my.redButton.on('release', function() {
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        var data = JSON.stringify(slackOut);
        xhr.send(data);
    });

    my.blueButton.on('release', function() {
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/json');
        var data = JSON.stringify(slackIn);
        xhr.send(data);
    });
}

}).start();
