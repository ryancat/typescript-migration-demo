import 'jest';
import myLib from 'myLib';

test('moduleA from myLib should run', () => {
  expect(myLib.hasOwnProperty('ModuleA')).toBeTruthy();
  expect(myLib.hasOwnProperty('ModuleB')).toBeTruthy();
  expect(myLib.hasOwnProperty('run')).toBeTruthy();
});
