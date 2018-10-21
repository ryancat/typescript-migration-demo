var ModuleA = require('./ModuleA');
var ModuleB = require('./ModuleB');

module.exports = {
  ModuleB: ModuleB,
  
  run: function () {
    const moduleA = new ModuleA({
      name: 'my module A',
      type: 'smart'
    });

    const moduleB = new ModuleB({
      name: 'my module B',
      type: 'dumb'
    });

    return moduleA.run() + ' ' + moduleB.run();
  }
};
