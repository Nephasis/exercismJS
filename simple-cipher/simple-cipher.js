const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

function randomNumberFromMinToMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)   
}

function randomLetter() {
  let shift = 9;
  let number = randomNumberFromMinToMax(1, 25) + shift;
  return number.toString(36);
}

function randomKey(length = 100, list = []) {
  debugger;
  if (length === list.length) {
    return list.join('');
  }
  return randomKey(length, [...list, randomLetter()]);
}

function verifyBadKey(key) { 
  return (!/^[a-z]+$/.test(key));
};

function Cipher(key) {
  if (verifyBadKey(key)) {
    throw new Error('Bad key');
  } else {
    this.key = key || randomKey();
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
