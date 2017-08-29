const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

function Pangram(sentence) {
  this.sentence = sentence.toLowerCase();
};

function isInSentence(letter) {
  return this.indexOf(letter) >= 0;
};

Pangram.prototype.isPangram = function() {
  return alphabet.every(isInSentence, this.sentence);
}

module.exports = Pangram ;
