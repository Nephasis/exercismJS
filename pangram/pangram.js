const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

function Pangram (sentence) {
  this.sentence = sentence.toLowerCase();
};

function isInSentence (letter) {
  return sentence.indexOf(letter) > -1;
};

Pangram.prototype.isPangram = function () {
  sentence = this.sentence
  return alphabet.every(isInSentence);
}

module.exports = Pangram ;
