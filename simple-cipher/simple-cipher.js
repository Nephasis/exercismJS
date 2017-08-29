const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numberToLetter(min, max) { 
  return alphabet[generateNumber(min, max)];
}

function generateRandomKey(len, i) {
  var randomKey = Array(len).join('a').split('')

  function randomize(i) {
    if (i = randomKey.length) {
      return;
    };

    randomKey[i] = numberToLetter(0, 26);
    return generateRandomKey(i+1)
  }

  return randomKey.join('')
};

function verifyBadKey(key) { 
  return (!/^[a-z]+$/.test(key));
};

function Cipher(key) {
  if (verifyBadKey(key)) {
    throw new Error('Bad key');
  } else {
    this.key = key || generateRandomKey(100, 0);
  }
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
