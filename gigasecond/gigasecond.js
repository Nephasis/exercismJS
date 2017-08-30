function Gigasecond(birthDate) {
  this.birthDate = Date.parse(birthDate);
};

Gigasecond.prototype.date = function() {
  return new Date(this.birthDate + 1e12);
}

module.exports = Gigasecond;
