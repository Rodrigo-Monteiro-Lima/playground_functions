// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui

  if (param1 === true && param2 === true){
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;

  return result;

}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let splitedWords = sentence.split(' ');

  return splitedWords;
}

// Desafio 4
function concatName(arrOfStrings) {
  // seu código aqui
  let result = '';

  for (let index = 0; index < arrOfStrings.length; index += 1) {
    if (index === arrOfStrings.length -1) {
      result += arrOfStrings[index] + ', ';
    }
  }
  
  result += arrOfStrings[0];
  
  return result;
}

// Desafio 5
function footballPoints(wins, ties,) {
  // seu código aqui
  let pontuation = 0;

  for (let index = 0; index < wins; index += 1) {
    pontuation += 3;
  }
  for (let indice = 0; indice < ties; indice += 1) {
    pontuation += 1;
  }
  return pontuation;
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
  let count = 0;
  let bigger = arr[0];

  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] >= bigger) { 
      bigger = arr[index];
    }
  }
  for (let indice = 0; indice < arr.length; indice += 1) {
    if (arr[indice] === bigger) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
