function Gigasecond(currentDate) {
  this.currentDate = currentDate;
};

Gigasecond.prototype.date = function() {
  const gigasec = 1000000000;
  var inputDate = new Date(this.currentDate.getTime());
  inputDate.setUTCSeconds(this.currentDate.getUTCSeconds() + gigasec)
  return inputDate;
}

module.exports = Gigasecond;
