const dnaToRna = {
  'A' : 'U',
  'T' : 'A',
  'C' : 'G',
  'G' : 'C'
}

function DnaTranscriber () {};

var translateNucleotide = function (nucleotide) {
  if (nucleotide in dnaToRna) {
    return dnaToRna[nucleotide]
  } else {
    throw new Error('Invalid input');
  }
}

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  return dnaStrand.split('').map(translateNucleotide).join('');
}

module.exports = DnaTranscriber;
