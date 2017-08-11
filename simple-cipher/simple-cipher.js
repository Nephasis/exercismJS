function Cipher (key) {
    this.alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    if (key && /^[a-z]+$/.test(key)) {
        this.key = key
    } else if (!/^[a-z]+$/.test(key)){
        throw new Error('Bad key');
    } else {
        this.key = Array(15).join("a").split('').map((letter) => {
            var rnumber = Math.floor(Math.random() * 25);
            return this.alphabet[rnumber];
        }).join('')
    }
};

Cipher.prototype.encode = function(input) {

    return input.split('').map((letter, index) => {
        var keyNumber = this.alphabet.indexOf(this.key[index]);
        var letterIndex = this.alphabet.indexOf(letter);
        if (letterIndex + keyNumber > 25) {
            var newIndex = letterIndex + keyNumber - 26;
        } else {
            var newIndex = letterIndex + keyNumber;
        }
        return this.alphabet[newIndex];
    }).join('');
};

Cipher.prototype.decode = function(input) {

    return input.split('').map((letter, index) => {
        var keyNumber = this.alphabet.indexOf(this.key[index]);
        var letterIndex = this.alphabet.indexOf(letter);
        if (letterIndex - keyNumber < 0) {
            var newIndex = letterIndex - keyNumber + 26;
        } else {
            var newIndex = letterIndex - keyNumber;
        }
        return this.alphabet[newIndex];
    }).join('');
};

module.exports = Cipher;
