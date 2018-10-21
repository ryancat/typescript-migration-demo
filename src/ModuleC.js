var ModuleC = function (config) {
  this.config = config;
};

ModuleC.prototype = {
  run: function () {
    return 'ModuleC';
  }
};

module.exports = ModuleC;
