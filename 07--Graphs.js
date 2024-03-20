class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

class City {
    constructor(name) {
        this.name = name;
        this.residents = [];
    }

    addResidente(person) {
        this.residents.push(person);
    }

    getResidents() {
        return this.residents.map(resident => resident.name);
    }
}

// Crear ciudades
let cali = new City("Cali");
let bogota = new City("Bogota");
let medellin = new City("Medellin");
let barranquilla = new City("Barranquilla");

// Crear personas
let person1 = new Person("Juan", 30, cali);
let person2 = new Person("Carlos", 25, barranquilla);
let person3 = new Person("Maria", 35, barranquilla);
let person4 = new Person("Carla", 20, cali);
let person5 = new Person("Natalia", 25, bogota);
let person6 = new Person("Miguel", 15, bogota);
let person7 = new Person("Ernesto", 40, medellin);
let person8 = new Person("Emilia", 45, bogota);
let person9 = new Person("Robert", 25, bogota);
let person10 = new Person("Ricky", 10, medellin);
let person11 = new Person("Aurora", 33, barranquilla);
let person12 = new Person("Laura", 28, medellin);
let person13 = new Person("Lorenzo", 36, bogota);

// Añadir residentes
cali.addResidente(person1);
barranquilla.addResidente(person2);
barranquilla.addResidente(person3);
cali.addResidente(person4);
bogota.addResidente(person5);
bogota.addResidente(person6);
medellin.addResidente(person7);
bogota.addResidente(person8);
bogota.addResidente(person9);
medellin.addResidente(person10);
barranquilla.addResidente(person11);
medellin.addResidente(person12);
bogota.addResidente(person13);

// Función para obtener la ciudad con más habitantes
function obtenerCiudadMasHabitantes(cities) {
    return cities.reduce((maxCity, currentCity) => 
        maxCity.residents.length > currentCity.residents.length ? maxCity : currentCity);
}

// Obtener la ciudad con más habitantes
let ciudadMasHabitantes = obtenerCiudadMasHabitantes([cali, bogota]);

// Imprimir los habitantes de la ciudad con más habitantes
console.log(`Personas que viven en ${ciudadMasHabitantes.name}: `, ciudadMasHabitantes.getResidents());

