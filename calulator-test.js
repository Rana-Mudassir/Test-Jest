const Calculator = require("./calculator");

describe('Addition', () => {
  test('10 + 5 = 15', () => {
    // Arrange
    const number1 = 10;
    const number2 = 5;

    // Act
    const addition = new Calculator(number1, number2);
    const result = addition.add(number1, number2);

    // Assert
    expect(result).toEqual(15)
  })
});

describe('Substraction', () => {
  test('10 - 5 = 5', () => {
    // Arrange
    const number1 = 10;
    const number2 = 5;

    // Act
    const substraction = new Calculator(number1, number2);
    const result = substraction.substract(number1, number2);

    // Assert
    expect(result).toEqual(5);
  })
})

describe('Division', () => {
  test('5 / 3 = 1.67', () => {
    // Arrange
    const number1 = 5;
    const number2 = 3;

    // Act
    const division = new Calculator(number1, number2);
    const result = division.divide(number1, number2);

    // Assert
    expect(result).toBe('1.67');
  })
})