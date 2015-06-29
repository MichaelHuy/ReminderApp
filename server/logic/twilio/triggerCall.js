var client = require('./client');

var call = {
  triggerCall: function(reminder) {
    return client.makeCall({
      to: reminder.user.phone,
      from: '+12014312641',
      //url: 'http://20585314.ngrok.com/call/twiml/' + reminder.user._id + '/' + reminder._id
      url: 'http://rem.mybluemix.net/call/twiml/' + reminder.user._id + '/' + reminder._id      
    }, function(error, response) {
      console.log(error || response);
    });
  }
}

module.exports = call;
