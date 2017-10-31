
var numberCard = prompt("Ingresa el número de tu tarjeta");

/*Comprobar que los datos ingresados sean números.
Para saber si no es un numero, isNaN("string") devuelve true.
Un campo vacío o espacio es un string */
  if (isNaN(numberCard) ) {
      alert("número inválido, intenta nuevamente");
  }
  var enteredNumbers = [];
  for (var i =  0; i < numberCard.length; i++){
//Devolviendo los caracteres de la cadena con charAt(), para rellenar el arreglo
    enteredNumbers.push(numberCard.charAt(i));
  }





//var isValidCard = [];

/*numberCard.reverse();
console.log(numberCard);*/
