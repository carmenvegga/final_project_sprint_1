
var numberCard = prompt("Ingresa el número de tu tarjeta");

/*Comprobar que los datos ingresados sean números.
Para saber si no es un numero, isNaN("string") devuelve true.
Un campo vacío o espacio es un string */
  if (isNaN(numberCard) ) {
      alert("número inválido, intenta nuevamente");
  }

var enteredNumbers = [];

for (var i =  0; i < numberCard.length; i++){
//Devolviendo los caracteres de la cadena con charAt(), para rellenar el arreglo.
    enteredNumbers.push(numberCard.charAt(i));
  }

//pasar los elementos del array en orden inverso, por medio de una función reverse..
var reverseOrder = function (enteredNumbers){

    var newNumbersPosition = [];

    var size = enteredNumbers.length;

    var lastPosition = size -1;
//la última posición va a ser, el tamaño del array menos uno.
//en esta iteración recorre desde la última posición hasta la posición cero.
    for (var i = lastPosition; i >= 0; i --){

        newNumbersPosition.push(enteredNumbers[i]);
    }
    return newNumbersPosition;
}
console.log(reverseOrder(enteredNumbers));

//intentando con el método .reverse();
var testArray = [];



//var isValidCard = [];
