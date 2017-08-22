const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

function generateNumber (min, max) {
  var randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  if (randNumber === max) {
    randNumber = generateNumber(min, max);
  }
  return randNumber;
}

function numberToLetter (min, max) { 
  return alphabet[generateNumber(min, max)];
}

function generateRandomKey (min, max, len) {
  var key = '';
  while (key.length < len + 1) {
    key += numberToLetter(min, max);
  }
  return key;
};

function verifyBadKey (key) { 
  return (!/^[a-z]+$/.test(key));
};

function _throw (msg) {throw new Error(msg)};

function Cipher (key) {
  verifyBadKey(key) ? _throw('Bad key') : this.key = key || generateRandomKey(0, 26, 100);
};


Cipher.prototype.encode = function(input) {
  return input.split('').map((letter, index) => {
      var keyNumber = alphabet.indexOf(this.key[index]),
          letterIndex = alphabet.indexOf(letter),
          newIndex = letterIndex + keyNumber;
      letterIndex + keyNumber > 25 ? newIndex -= 26 : newIndex;
      return alphabet[newIndex];
  }).join('');
};
  
Cipher.prototype.decode = function(input) {
  return input.split('').map((letter, index) => {
      var keyNumber = alphabet.indexOf(this.key[index]),
          letterIndex = alphabet.indexOf(letter),
          newIndex = letterIndex - keyNumber;
      letterIndex - keyNumber < 0 ? newIndex += 26 : newIndex;
      return alphabet[newIndex];
  }).join('');
};


module.exports = Cipher;
