function DnaTranscriber () {};

DnaTranscriber.prototype.toRna = function(dnaStrand) {

    const dnaToRna = {
        'A' : 'U',
        'T' : 'A',
        'C' : 'G',
        'G' : 'C'
    }
    
    return dnaStrand.split('').map((nucleotide) => {
        if (nucleotide in dnaToRna) {
            return dnaToRna[nucleotide]
        } else {
            throw new Error('Invalid input');
        }
    }).join('')
;
}

module.exports = DnaTranscriber;
