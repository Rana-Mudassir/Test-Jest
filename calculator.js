
class Calculator {
  constructor(firstNum, secondNum) {
    this.firstNum = firstNum;
    this.secondNum = secondNum;
  }

  add(){
    return this.firstNum + this.secondNum;
  }

  substract(){
    return this.firstNum - this.secondNum;
  }

  divide(){
    return (this.firstNum / this.secondNum).toFixed(2);
  }

  multiply(){
    return this.firstNum * this.secondNum;
  }
}

module.exports = Calculator;