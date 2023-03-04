const capitalize = require('./capitalize');

test('Capitalize', () => {
  // Act
  const str = 'daniel'

  // Arrange
  const result = capitalize(str);

  // Assert
  expect(result).toBe('Daniel');
})