function stringLength(string) {
  if(string.length < 1){
    throw new Error('Length is less than 1');
  }
  if(string.length > 10){
    throw new Error('Length is greater than 10');
  }
  return string.length;
}

module.exports = stringLength;