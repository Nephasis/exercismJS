function DnaTranscriber () {};

DnaTranscriber.prototype.toRna = function(dnaStrand) {

    var dnaToRna = new Map();

    dnaToRna.set('A', 'U');
    dnaToRna.set('T', 'A');
    dnaToRna.set('C', 'G');
    dnaToRna.set('G', 'C');

    this.rnaStrand = new String;
    for (var i in dnaStrand) {
        if (dnaToRna.has(dnaStrand[i])) {
            this.rnaStrand += dnaToRna.get(dnaStrand[i]);
        } else {
            throw new Error('Invalid input')
        }
    };

    return this.rnaStrand;
}

module.exports = DnaTranscriber;
