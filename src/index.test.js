const myLib = require('./index');

test('myLib should init ModuleA and ModuleB', () => {
  expect(myLib.run()).toBe('ModuleA ModuleB');
});