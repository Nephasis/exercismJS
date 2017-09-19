const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

function Pangram(input) {
  let sentenceToCheck = input.toLowerCase()
  return {
    isPangram: function() {
      return alphabet.every(isInSentence(sentenceToCheck));
    }
  }
};

function isInSentence(sentence) {
  return (letter) => {
    return sentence.indexOf(letter) >= 0;
  }
}

module.exports = Pangram ;
