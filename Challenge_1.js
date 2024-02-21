/*
Santiago de Cali, Febrero 21 del 2024
Challenge List TODOs
Esteban Marini Viteri
*/

class Task {
    constructor(title, description, points) {
        this.title = title;
        this.description = description;
        this.points = points;
    }
}

class ListTodos {
    constructor() {
        this.tasks = []; // Lista para almacenar las tareas
    }

    append(task) {
        const newTask = new Task(task.title, task.description, task.points);
        this.tasks.push(newTask); // Agregar la nueva tarea a la lista
    }

    print() {
        console.log("Tareas almacenadas:");
        for (const task of this.tasks) {
            console.log(`- Título: ${task.title}, Descripción: ${task.description}, Puntos: ${task.points}`);
        }
    }
}

const myList = new ListTodos();
myList.append({ title: 'Matemáticas', description: 'Una descripción', points: 5 });
myList.append({ title: 'Lenguaje', description: 'Una descripción', points: 2 });
myList.append({ title: 'Ciencias', description: 'Una descripción', points: 4});
myList.append({ title: 'Ingles', description: 'Una descripción', points: 5 });
myList.print();


