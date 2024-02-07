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
*/