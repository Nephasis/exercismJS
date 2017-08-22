const dnaToRna = {
  'A' : 'U',
  'T' : 'A',
  'C' : 'G',
  'G' : 'C'
}

function DnaTranscriber () {};

var translate = function (nucleotide) {
  if (nucleotide in dnaToRna) {
    return dnaToRna[nucleotide]
  } else {
    throw new Error('Invalid input');
  }
}

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  return dnaStrand.split('').map(translate).join('');
}

module.exports = DnaTranscriber;
