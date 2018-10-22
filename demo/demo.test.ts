import 'jest';
import myLib from '../dist/myLib';

test('moduleA from myLib should run', () => {
  expect(myLib.hasOwnProperty('ModuleA')).toBeTruthy();
  expect(myLib.hasOwnProperty('ModuleB')).toBeTruthy();
  expect(myLib.hasOwnProperty('run')).toBeTruthy();
});
