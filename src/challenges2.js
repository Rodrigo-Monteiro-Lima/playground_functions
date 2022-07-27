// Desafio 11
function generatePhoneNumber(arr) {
  // seu código aqui
  let tel = '(';

  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.'
  } else {
    for (let index = 0; index < arr.length; index += 1) {
      if (arr[index] < 0 || arr[index] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else {
        tel += arr[index];
        if (index === 1) {
          tel += ') ';
        }
        if (index === 6) {
          tel += '-';
        }
      }   
  
      }
    }
    for (let indice = 0; indice < tel.length; indice += 1) {
      let count = 0;
      for (let index2 = 0; index2 < tel.length; index2 += 1) {
        if (tel[indice] === tel[index2]) {
          count += 1;
        }
      }
      if (count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
      count = 0;
    }
    
    return tel;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let trial = '';
  let answer = 'true, true, true'
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    trial += 'true, ';
  } else {
    trial += 'false, ';
  }
  if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    trial += 'true, ';
  } else {
    trial += 'false, ';
  }
  if (lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)) {
    trial += 'true';
  } else {
    trial += 'false';
  }
  if (trial === answer) {
    return true;
  } return false;
  
}

// Desafio 13
//alguns comandos foram retirados daqui: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
function hydrate(str) {
  // seu código aqui
let type = /\d+/g;
let arr = str.match(type);
let result = 0;

for (let index = 0; index < arr.length; index += 1) {
  result += parseInt(arr[index]);
}
if (result === 1) {
  return result + ' copo de água';
} return result + ' copos de água';

}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
