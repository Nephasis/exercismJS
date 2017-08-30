function Bob() {};

Bob.prototype.hey = function (input) {
  if (input.match(/[a-z]/i) && input == input.toUpperCase()) {
    return "Whoa, chill out!";
  } else if (input.trim().slice(-1) === '?'){
    return 'Sure.';
  } else if (!input.match(/[a-z0-9]/i)){
    return "Fine. Be that way!"
  } else {
    return 'Whatever.'
  }
}

module.exports = Bob;
