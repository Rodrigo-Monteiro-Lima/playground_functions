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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arr) {
  // seu código aqui
  let result = [];

  for (let index = 0; index < arr.length; index +=1) {
    if (arr[index] % 3 === 0 && arr[index] % 5 !== 0) {
      result.push('fizz');
    } else if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (arr[index] % 5 === 0 && arr[index] % 3 !== 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(str) {
  // seu código aqui
  const vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  let phraseEncoded = '';  

  for  (let index in str) {
    if (str[index] != 'a' && str[index] != 'e' && str[index] != 'i' && str[index] != 'o' && str[index] != 'u') {
      phraseEncoded += str[index];
    } else {
    for (let key in vowels){
      if ( str[index] == key) {
        phraseEncoded += vowels[key];
      }
    }
    }
  }
  return phraseEncoded;
}
function decode(str) {
  // seu código aqui
  const numbers = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }

  let phraseDecoded = '';  

  for  (let index in str) {
    if (str[index] != '1' && str[index] != '2' && str[index] != '3' && str[index] != '4' && str[index] != '5') {
      phraseDecoded += str[index];
    } else {
    for (let key in numbers){
      if ( str[index] == key) {
        phraseDecoded += numbers[key];
      }
    }
    }
  }
  return phraseDecoded;
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
