const reverseaString = require('./reverseString');

test('returns the reverse of the string', () => {
  expect(reverseaString('daniel')).toBe('leinad');
})