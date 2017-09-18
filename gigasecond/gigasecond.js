function Gigasecond(birthDate) {
  this.birthDate = Date.parse(birthDate);
};

Gigasecond.prototype.date = function() {
  let gigasecond = 1000000000000
  return new Date(this.birthDate + gigasecond);
}

module.exports = Gigasecond;
