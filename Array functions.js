/*
Santiago de Cali, Febrero 07 2024 - Estructura de datos y algoritmos 2
Esteban Marini Viteri
Funciones de los array
Para hacer un mejor entendimiento vamos a agrupar las funciones


Métodos de Modificación del Array:

1. Push()
    Descripción: Agrega uno o más elementos al final del array y devuelve la nueva longitud del array.
    Ejemplo:
*/
     const frutas1 = ['manzana', 'banana'];
     const nuevaLongitud = frutas1.push('naranja');
/*  Resultado: nuevaLongitud es 3, frutas es ['manzana', 'banana', 'naranja']

2. Pop()
    Descripción: Elimina el último elemento del array y lo devuelve.
    Ejemplo:
*/
     const frutas2 = ['manzana', 'banana', 'naranja'];
     const ultimaFruta = frutas2.pop();
/*  Resultado: ultimaFruta es 'naranja', frutas es ['manzana', 'banana']

3. Shift()
Descripción: Elimina el primer elemento del array y lo devuelve.
Ejemplo:
*/
     const frutas3 = ['manzana', 'banana', 'naranja'];
     const primeraFruta = frutas3.shift();
/* Resultado: primeraFruta es 'manzana', frutas es ['banana', 'naranja']

4. Unshift()
Descripción: Agrega uno o más elementos al inicio del array y devuelve la nueva longitud del array.
Ejemplo:
*/
     const frutas4 = ['banana', 'naranja'];
     const nuevaLongitud2 = frutas4.unshift('manzana');
/* Resultado: nuevaLongitud es 3, frutas es ['manzana', 'banana', 'naranja']

5. Plice()
Descripción: Cambia el contenido de un array, eliminando o reemplazando elementos existentes y/o agregando nuevos elementos.
Ejemplo:
*/
     const frutas5 = ['manzana', 'pera', 'uva', 'naranja'];
     frutas5.splice(2, 1, 'sandía', 'melon');
/* Resultado: frutas es ['manzana', 'pera', 'sandía', 'melon', 'naranja']

6. CopyWithin()
Descripción: Copia una secuencia de elementos dentro del array, sobrescribiendo el array original.
Ejemplo:
*/
     const numeros = [1, 2, 3, 4, 5];
     numeros.copyWithin(0, 3, 4);
/*  Resultado: numeros es [4, 2, 3, 4, 5]

7. Fill()
Descripción: Rellena todos los elementos del array con un valor estático.
Ejemplo:
*/
     const numeros2 = [1, 2, 3, 4, 5];
     numeros2.fill(0, 2, 4);

/* Resultado: numeros es [1, 2, 0, 0, 5] 

----------------------------------------------------------------------------------------------------------------------------------------------------

Métodos de Iteración:

1. ForEach()
   Descripción: Ejecuta una función por cada elemento del array.
   Ejemplo:
*/
     const numeros3 = [1, 2, 3, 4, 5];
     numeros3.forEach((numero) => {
       console.log(numero * 2);
     });
/*  Resultado: Imprimirá el doble de cada número en la consola


2. Map()
    Descripción: Crea un nuevo array con los resultados de la llamada a la función indicada aplicada a cada uno de sus elementos.
    Ejemplo:
*/
     const numeros4 = [1, 2, 3, 4, 5];
     const numerosDobles = numeros4.map((numero) => {
       return numero * 2;
     });
/*  Resultado: numerosDobles será [2, 4, 6, 8, 10]


3. Filter()
    Descripción: Crea un nuevo array con todos los elementos que cumplan la condición especificada.
    Ejemplo:
*/
     const numeros5 = [1, 2, 3, 4, 5];
     const numerosPares = numeros5.filter((numero) => {
       return numero % 2 === 0;
     });
/*  Resultado: numerosPares será [2, 4]


 4. Reduce()
    Descripción: Reduce el array a un solo valor, aplicando una función a cada elemento.
    Ejemplo:
*/
     const numeros6 = [1, 2, 3, 4, 5];
     const sumaTotal = numeros6.reduce((acumulador, numero) => {
       return acumulador + numero;
     }, 0);
/*  Resultado: sumaTotal será 15 (1 + 2 + 3 + 4 + 5)

 5. ReduceRight()
    Descripción: Reduce el array a un solo valor, aplicando una función a cada elemento en orden inverso.
    Ejemplo:
*/
     const palabras = ['Hola', 'a', 'todos'];
     const frase = palabras.reduceRight((acumulador, palabra) => {
       return acumulador + ' ' + palabra;
     });
/*  Resultado: frase será 'todos a Hola'

----------------------------------------------------------------------------------------------------------------------------------------------------

Métodos de Búsqueda y Comprobación:

1. IndexOf()

Descripción: Retorna el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si el elemento no está presente.
Ejemplo:
*/
const frutas6 = ['manzana', 'pera', 'uva', 'manzana'];
console.log(frutas6.indexOf('manzana')); // Resultado: 0
console.log(frutas6.indexOf('banana')); // Resultado: -1
/*
2. LastIndexOf()

Descripción: Retorna el último índice del elemento en el array, o -1 si no se encuentra.
Ejemplo:
*/
const numeros7 = [2, 5, 9, 2];
console.log(numeros7.lastIndexOf(2)); // Resultado: 3
console.log(numeros7.lastIndexOf(7)); // Resultado: -1
/*
3. Includes()

Descripción: Determina si un array incluye un determinado elemento, devolviendo true o false según corresponda.
Ejemplo:
*/
const numeros8 = [1, 2, 3, 4, 5];
console.log(numeros8.includes(3)); // Resultado: true
console.log(numeros8.includes(8)); // Resultado: false
/*
4. Find()

Descripción: Devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
Ejemplo:
*/
const edades2 = [25, 30, 18, 40];
const mayorDeEdad = edades2.find((edad) => edad >= 18);
console.log(mayorDeEdad); // Resultado: 25
/*
5. FindIndex()

Descripción: Devuelve el índice del primer elemento del array que cumple la función de prueba proporcionada, o -1 si no se encuentra.
Ejemplo:
*/
const edades3 = [25, 30, 18, 40];
const indiceMayorDeEdad = edades3.findIndex((edad) => edad >= 18);
console.log(indiceMayorDeEdad); // Resultado: 0
/*
6. Some()

Descripción: Comprueba si al menos un elemento del array cumple con la condición dada, devolviendo true o false.
Ejemplo:
*/
const numeros9 = [10, 20, 30, 40, 50];
const resultado2 = numeros9.some((numero) => numero > 25);
console.log(resultado2); // Resultado: true
/*
7. Every()

Descripción: Comprueba si todos los elementos del array cumplen con la condición dada, devolviendo true o false.
Ejemplo:
*/
const edades4 = [25, 30, 18, 40];
const resultado3 = edades4.every((edad) => edad >= 18);
console.log(resultado3); // Resultado: true
/*

----------------------------------------------------------------------------------------------------------------------------------------------------
Métodos de Ordenación y Reversión:

1. Sort():
El método sort() se utiliza en JavaScript para ordenar los elementos de un arreglo. Este método ordena los elementos del arreglo alfabéticamente o numéricamente, dependiendo del tipo de dato que contengan. 
Ejemplo:
*/

var frutas = ["naranja", "manzana", "plátano", "uva"];
frutas.sort();

console.log(frutas); // Output: ["manzana", "naranja", "plátano", "uva"]
/*

En este ejemplo, el método sort() se utiliza para ordenar el arreglo "frutas" en orden alfabético. El resultado se muestra en la consola, donde las frutas se muestran en el siguiente orden: "manzana", "naranja", "plátano" y "uva".

2. Reverse():
El método reverse() se utiliza en JavaScript para invertir el orden de los elementos de un arreglo. Este método cambia el orden de los elementos en el arreglo, de manera que el último elemento se convierte en el primero, el penúltimo se convierte en el segundo, y así sucesivamente.

Ejemplo:
*/
var numeros123 = [1, 2, 3, 4, 5];
numeros.reverse();

console.log(numeros123); // Output: [5, 4, 3, 2, 1]
/*
En este ejemplo, el método reverse() se utiliza para invertir el orden del arreglo "numeros". El resultado se muestra en la consola, donde los números se muestran en el siguiente orden: 5, 4, 3, 2, 1.

----------------------------------------------------------------------------------------------------------------------------------------------------

Métodos de Concatenación y División:
1. Concat():
El método concat() se utiliza en JavaScript para combinar dos o más cadenas y devolver una nueva cadena resultante de la concatenación.

Ejemplo:

*/
var cadena1 = "Hola";
var cadena2 = "mundo";
var resultado = cadena1.concat(" ", cadena2);

console.log(resultado); // Output: "Hola mundo"
/*
En este ejemplo, el método concat() se utiliza para combinar las cadenas "Hola" y "mundo" en una nueva cadena "Hola mundo". El resultado se muestra en la consola.

2. Join():
El método join() se utiliza en JavaScript para unir todos los elementos de un arreglo en una cadena, separados por un separador especificado.

Ejemplo de uso del método join():

*/
var arreglo = ["Hola", "mundo", "cómo", "estás"];
var resultado = arreglo.join(" ");

console.log(resultado); // Output: "Hola mundo cómo estás"

/*
En este ejemplo, el método join() se utiliza para unir todos los elementos del arreglo en una cadena separada por espacios. El resultado se muestra en la consola como "Hola mundo cómo estás".
3. Slice():
El método slice() se utiliza en JavaScript para extraer una porción de un arreglo o una cadena, y devuelve una nueva porción como un nuevo arreglo.

Ejemplo de uso del método slice():

*/
var arreglo = [1, 2, 3, 4, 5];
var resultado = arreglo.slice(1, 4);

console.log(resultado); // Output: [2, 3, 4]
/*
En este ejemplo, el método slice() se utiliza para extraer una porción del arreglo original, desde el índice 1 hasta el índice 4 (sin incluir el índice 4). El resultado se muestra en la consola como [2, 3, 4].


----------------------------------------------------------------------------------------------------------------------------------------------------

Métodos de Conversión a Cadena:

1. ToString():
El método toString() se utiliza en JavaScript para convertir un valor en una cadena de texto. Este método está disponible en varios tipos de datos, como números, booleanos, objetos y arreglos. Cada tipo de dato tiene su propia implementación del método toString().

Ejemplo de uso del método toString():

*/
var numero = 42;
var cadena = numero.toString();

console.log(cadena); // Output: "42"
/*
En este ejemplo, el método toString() se utiliza para convertir el número 42 en una cadena de texto. El resultado se asigna a la variable "cadena" y se muestra en la consola.



2. ToLocaleString():
El método toLocaleString() se utiliza en JavaScript para convertir un valor en una cadena de texto localizada, de acuerdo con la configuración regional del entorno en el que se ejecuta el código. Este método es útil para mostrar valores en formatos específicos de cada región, como fechas y números.

Ejemplo de uso del método toLocaleString():

*/
var numero = 123456.789;
var cadena = numero.toLocaleString();

console.log(cadena); // Output: "123,456.789" (dependiendo de la configuración regional)

/*
En este ejemplo, el método toLocaleString() se utiliza para convertir el número 123456.789 en una cadena de texto con formato localizado. El resultado se asigna a la variable "cadena" y se muestra en la consola. El formato de la cadena puede variar según la configuración regional del entorno.


----------------------------------------------------------------------------------------------------------------------------------------------------

Métodos de Acceso y Longitud:
1. Length:
El método length se utiliza en JavaScript para obtener la longitud de un arreglo o una cadena de texto. Este método devuelve el número de elementos en un arreglo o la cantidad de caracteres en una cadena.

Ejemplo de uso del método length:
*/

var arreglo = [1, 2, 3, 4, 5];
var longitud = arreglo.length;

console.log(longitud); // Output: 5

/*
En este ejemplo, el método length se utiliza para obtener la longitud del arreglo "arreglo". El resultado se asigna a la variable "longitud" y se muestra en la consola.

2. IsArray():
El método isArray() se utiliza en JavaScript para verificar si un valor es un arreglo. Este método devuelve true si el valor es un arreglo y false si no lo es.

Ejemplo de uso del método isArray():
*/

var arreglo = [1, 2, 3, 4, 5];
var esArreglo = Array.isArray(arreglo);

console.log(esArreglo); // Output: true
/*
En este ejemplo, el método isArray() se utiliza para verificar si el valor de la variable "arreglo" es un arreglo. El resultado se asigna a la variable "esArreglo" y se muestra en la consola.

3. Entries():
El método entries() se utiliza en JavaScript para obtener un iterador de pares clave-valor de un arreglo. Este método devuelve un nuevo objeto iterador que contiene los pares clave-valor de cada elemento del arreglo.

Ejemplo de uso del método entries():
*/

var arreglo = ["a", "b", "c"];
var iterador = arreglo.entries();

for (var entrada of iterador) {
  console.log(entrada);
}
/*
En este ejemplo, el método entries() se utiliza para obtener un iterador de pares clave-valor del arreglo "arreglo". Luego, se utiliza un bucle for...of para recorrer cada entrada del iterador y mostrarla en la consola.

4. Keys():
El método keys() se utiliza en JavaScript para obtener un iterador de las claves de un arreglo. Este método devuelve un nuevo objeto iterador que contiene las claves de cada elemento del arreglo.

Ejemplo de uso del método keys():
*/

var arreglo = ["a", "b", "c"];
var iterador = arreglo.keys();

for (var clave of iterador) {
  console.log(clave);
}
/*
En este ejemplo, el método keys() se utiliza para obtener un iterador de las claves del arreglo "arreglo". Luego, se utiliza un bucle for...of para recorrer cada clave del iterador y mostrarla en la consola.

5. Values():
 El método values() se utiliza en JavaScript para obtener un iterador de los valores de un arreglo. Este método devuelve un nuevo objeto iterador que contiene los valores de cada elemento del arreglo.

Ejemplo de uso del método values():
*/

var arreglo = ["a", "b", "c"];
var iterador = arreglo.values();

for (var valor of iterador) {
  console.log(valor);
}
/*
En este ejemplo, el método values() se utiliza para obtener un iterador de los valores del arreglo "arreglo". Luego, se utiliza un bucle for...of para recorrer cada valor del iterador y mostrarlo en la consola.

----------------------------------------------------------------------------------------------------------------------------------------------------

Métodos de Clonación y Creación de Arrays:
1. From():
El método from() se utiliza en JavaScript para crear un nuevo arreglo a partir de un objeto iterable o un arreglo-like. Este método devuelve un nuevo arreglo con los elementos del objeto iterable o arreglo-like.

Ejemplo de uso del método from():
*/

var objetoIterable = "Hola";
var arreglo = Array.from(objetoIterable);

console.log(arreglo); // Output: ["H", "o", "l", "a"]
/*
En este ejemplo, el método from() se utiliza para crear un nuevo arreglo a partir del objeto iterable "objetoIterable", que en este caso es una cadena de texto. El resultado se asigna a la variable "arreglo" y se muestra en la consola.

2. Of():
El método of() se utiliza en JavaScript para crear un nuevo arreglo con los elementos pasados como argumentos. Este método devuelve un nuevo arreglo con los elementos especificados.

Ejemplo de uso del método of():
*/

var arreglo = Array.of(1, 2, 3, 4, 5);

console.log(arreglo); // Output: [1, 2, 3, 4, 5]
/*
En este ejemplo, el método of() se utiliza para crear un nuevo arreglo con los elementos 1, 2, 3, 4 y 5. El resultado se asigna a la variable "arreglo" y se muestra en la consola.

----------------------------------------------------------------------------------------------------------------------------------------------------

Métodos de Iteración sobre Arrays Multidimensionales:
1. Flat():
El método flat() se utiliza en JavaScript para aplanar un array multidimensional, es decir, convertirlo en un array unidimensional. Este método elimina las ranuras vacías en el array y devuelve un nuevo array resultante.

Ejemplo de uso del método flat():
*/

var array = [1, [2, 3], [4, [5, 6]]];
var arrayAplanado = array.flat();

console.log(arrayAplanado); // Output: [1, 2, 3, 4, 5, 6]
/*
En este ejemplo, el método flat() se utiliza para aplanar el array multidimensional "array". El resultado se asigna a la variable "arrayAplanado" y se muestra en la consola.

2. FlatMap():
 El método flatMap() se utiliza en JavaScript para realizar una combinación de los métodos map() y flat(). Este método se utiliza para mapear cada elemento de un array y luego aplanar el resultado en un nuevo array.

Ejemplo de uso del método flatMap():
*/

var array = [1, 2, 3];
var arrayAplanado = array.flatMap(function(elemento) {
  return [elemento, elemento * 2];
});

console.log(arrayAplanado); // Output: [1, 2, 2, 4, 3, 6]
/*
En este ejemplo, el método flatMap() se utiliza para mapear cada elemento del array "array" y luego aplanar el resultado en un nuevo array. El resultado se muestra en la consola como [1, 2, 2, 4, 3, 6].



----------------------------------------------------------------------------------------------------------------------------------------------------

Métodos de Comprobación de Arrays Vacíos:
1. IsEmpty():
 El método isEmpty() se utiliza en JavaScript para comprobar si un array está vacío, es decir, si no contiene ningún elemento. Este método devuelve true si el array está vacío y false si contiene al menos un elemento.

Ejemplo de uso del método isEmpty():
*/

var array = [];
var estaVacio = array.isEmpty();

console.log(estaVacio); // Output: true
/*
En este ejemplo, el método isEmpty() se utiliza para comprobar si el array "array" está vacío. El resultado se asigna a la variable "estaVacio" y se muestra en la consola.

----------------------------------------------------------------------------------------------------------------------------------------------------
Métodos de Iteración Diferida (Lazy Iteration):
1. FlatMap():
El método flatMap() se utiliza en JavaScript para mapear cada elemento de un array y luego aplanar el resultado en un nuevo array. Este método es una combinación de los métodos map() y flat().


Ejemplo de uso del método flatMap():
*/

var array = [1, 2, 3];
var newArray = array.flatMap(function(elemento) {
  return [elemento, elemento * 2];
});

console.log(newArray); // Output: [1, 2, 2, 4, 3, 6]
/*
En este ejemplo, el método flatMap() se utiliza para mapear cada elemento del array "array" y luego aplanar el resultado en un nuevo array. El resultado se muestra en la consola como [1, 2, 2, 4, 3, 6].

2. Map() con Array.prototype.values():
El método map() se utiliza en JavaScript para crear un nuevo array con los resultados de aplicar una función a cada elemento de otro array. El método Array.prototype.values() se utiliza para obtener un iterador de los valores de un array.

Ejemplo de uso del método map() con Array.prototype.values():
*/

var array = [1, 2, 3];
var newArray = Array.from(array.values()).map(function(elemento) {
  return elemento * 2;
});

console.log(newArray); // Output: [2, 4, 6]
/*
En este ejemplo, se utiliza el método Array.prototype.values() para obtener un iterador de los valores del array "array". Luego, se utiliza el método map() para aplicar una función a cada valor y crear un nuevo array con los resultados. El resultado se muestra en la consola como [2, 4, 6].








*/