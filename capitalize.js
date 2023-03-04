function capitalize(word) {
  let capital = word[0].toUpperCase();
  for(let i = 1; i < word.length; i++){
      capital += word[i];
  }
  return capital;
}

capitalize('dan');

module.exports = capitalize;