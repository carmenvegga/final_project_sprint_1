var initialPhrase = prompt("Ingresa la frase que deseas cifrar")
var n = ""
function cipher(string, n){
      var cipher = "";
  //cadena vacía porque aun no tiene valor asignado

  //condición para verificar que los datos ingresados no sean número, ni campo vacío.
  if ( string != null){
      for (var i = 0; i < string.length; i++){

      /*este metodo devolverá el valor unicode, (que encaja con la codificación Ascii)
      del caracter en el indice proporcionado*/
        var x = string.charCodeAt(i);
      //fórmula para encontrar su ubicación en el alfabeto
        var codeCipher = (x - n) % 26;

      //aplicar el Cifrado César

    }
      return cipher;
  }
}

function descipher (codeAscii){

    var descipher = "";
    var encryptedCharacter = String.fromCharCode(codeAscii);
    //convierte mi código Ascii en string cifrado
    return encryptedCharacter;
}
