const myLib = require('./myLib');

test('myLib should run ModuleA and ModuleB', () => {
  console.log(myLib);
  
  expect(myLib.run()).toBe('ModuleA-ModuleC ModuleB');
});
