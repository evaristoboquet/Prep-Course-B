// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    let suma= 0;
    for(let i= 1; i <= 10; i++){
      suma += i;
    }
  return suma;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  let acc=[];
  let indice= 0;
  while(indice < array.length){
    if(array[indice] % 2 === 0){
      acc.push(array[indice]);
    }
    indice++;
  }
  return acc;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  return array.map(function(num){
    return Math.pow(num,2);
  });
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  let suma = array.reduce(function(acc,num){
    return acc + num;
  }, 0)
  return suma;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  let numeroAString = num.toString();
  return numeroAString.length;
}


  // No modificar nada debajo de esta línea
  // --------------------------------

  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
