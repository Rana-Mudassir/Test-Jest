const stringLength = require('./stringLength');

test('returns the length of a string', () => {
  expect(stringLength('javascript')).toBe(10);
});

test('throw an error of string less than 1', () => {
  expect(() => {
    stringLength('');
  }).toThrow(Error);
})

test('throws an error of string greater than 10', () => {
  
  expect(() => {
    stringLength('encyclopedia');
  }).toThrow(Error);
})