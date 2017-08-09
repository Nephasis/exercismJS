//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
    this.value = input; 
};

Year.prototype.isLeap = function() {
    return  (this.value % 4 === 0 && this.value % 100 !== 0) || this.value % 400 === 0;
};

module.exports = Year;
