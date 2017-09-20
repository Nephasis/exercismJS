const gigasecond = 1000000000000;

function Gigasecond(birthDate) {
  this.birthDate = Date.parse(birthDate);
};

Gigasecond.prototype.date = function() {
  return new Date(this.birthDate + gigasecond);
}

module.exports = Gigasecond;
