/*
Santiago de Cali, Febrero 14 2024 - Estructura de datos y algoritmos 2
Esteban Marini Viteri
Funciones flecha y regulares
En JavaScript, existen dos tipos de funciones: las funciones normales y las funciones flecha (o arrow functions). Vamos a explorar las diferencias entre ellas:

Funciones normales: Se crean utilizando la palabra clave function. Por ejemplo:
 */
function multiplicar(num1, num2) {
    const resultado = num1 * num2;
    return resultado;
}
/*

Funciones flecha: Introducidas en ES6, ofrecen una forma más concisa de crear funciones. La sintaxis es la siguiente:

*/
const multiplicar = (num1, num2) => {
    const resultado = num1 * num2;
    return resultado;
};

/*
Ejemplos: 
Función Normal:
*/
function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par.";
    } else {
        return "El número es impar.";
    }
}
// Ejemplo de uso:
const numero1 = 10;
console.log(verificarParImpar(numero1)); // Salida: "El número es par."

//Función Flecha:

const verificarParImparFlecha = (numero) => {
    return numero % 2 === 0 ? "El número es par." : "El número es impar.";
};

// Ejemplo de uso:
const numero2 = 7;
console.log(verificarParImparFlecha(numero2)); // Salida: "El número es impar."