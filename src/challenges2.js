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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
