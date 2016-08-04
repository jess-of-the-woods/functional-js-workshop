function getShortMessages(messages) {
  var filteredResults = messages.
    filter(function(val) {
      if (val.message.length < 50) {
        return true}
      }).
    map(function(val2) {
      return val2.message;
    });
return filteredResults;  
};

module.exports = getShortMessages
