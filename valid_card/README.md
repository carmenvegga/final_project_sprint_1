## Tarjeta de crédito válida
Crear una web que pida, por medio de un prompt(), el número de una tarjeta
y confirmar su validez según el algoritmo de Luhn.

Consideraciones específicas:
 - el código debe estar compuesto por 1 función: isValidCard
 - el usuario no debe poder ingresar un campo vacío

## Pseudocódigo
Inicio
1. Crear una función que verifique los datos ingresados por el usuario, para que no pueda ingresar un string.
-  Si ingresa un string (o un espacio), pedir nuevos datos que sean números.
-  Si los datos ingresados son números, continuar.
2. Crear un arreglo con los números ingresados por el usuario.
3. Crear un nuevo arreglo que muestre los números obtenidos en orden inverso,
4. Crear una función que multiplique por dos a todos los números que ocupen las posiciones pares dentro del array.
-  Si la posición de los números es par, multiplicar los números.
-  Si el resultado de esa multiplicación  es mayor o igual a 10,sumar los dígitos que hayan resultado.
5. Identificar los nuevos números que se han obtenido de las posiciones pares y sumar con los números de las posiciones impares.
6. Identificar el resultado de la suma y obtener el residuo de la división entre 10,
-  Si el residuo es igual a cero, significa que el numero ingresado es una tarjeta válida.
Final

![diagrama valid card](./assets/images/valid-card.jpg)
