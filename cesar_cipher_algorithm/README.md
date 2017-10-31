## Cifrado César
Crear una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de cifrado césar, con el desplazamiento de 33 espacios hacia la derecha.

Consideraciones específicas
- El programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas.
 la fórmula para descifrar es: (x-n) % 26
- El código debe estar compuesto por dos funciones con los siguientes nombres:
cipher y decipher
- El usuario no debe poder ingresar un campo vacío o que contenga números.

## Pseudocódigo
Inicio
1. Crear una función que guarde los datos que ingresará el usuario por medio del prompt()
2. Verificar que los datos ingresados, no sean números ni un campo vacío.
3. Crear una función  que haga una iteración sobre cada caracter del string dado.
4. Obtener el codigo Ascii del caracter por medio del método charCodeAt()
5. Aplicar el cifrado César al caracter, con desplazamiento de 33 espacios
6. Devolver el mensaje encriptado según el algoritmo de cifrado César.
- Crear una función que convierta el codigo Ascii a caracter, por medio del metodo String.fromCharCode()
- Concatenar el caracter cifrado a un string
- Retornar el string cifrado
