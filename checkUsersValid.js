//working function
function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(submit) {
      return goodUsers.some(function(good) {
        return good.id === submit.id;
      })
    })
  };
}

module.exports = checkUsersValid

/*
//1st attempt----------------
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    if (submittedUsers.every === goodUsers.some) {
      return true;
    }; //close 'if'
  };
}

module.exports = checkUsersValid
*/

/*
//2nd attempt----------------
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
  var something = submittedUsers.every(function() {

  })
  }
}
*/




/*
Lucy Moore:
I had an another function layer in there,
i had the first 2 provided then 
submittedUsers.every as the third
then goodUsers.some as the 4th
*/