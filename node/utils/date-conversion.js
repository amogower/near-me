
function DateTime() {
  this.date = new Date();
}

DateTime.prototype = {
  get yyyymmdd() {
    return this.date.toISOString().slice(0, 10).replace(/-/g, '');
  },
};

module.exports = DateTime;
