const myLib = require('./myLib');

test('myLib should run ModuleA and ModuleB', () => {
  expect(myLib.run()).toBe('ModuleA-ModuleC ModuleB');
});
