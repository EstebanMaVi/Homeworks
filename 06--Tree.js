class Person {
    constructor(nombre, cumpleaños) {
        this.nombre = nombre;
        this.cumpleaños = cumpleaños;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }

    printPreorder() {
        console.log(this.nombre, this.cumpleaños);
        this.children.forEach((child) => child.printPreorder());
    }

    printPostorder() {
        this.children.forEach((child) => child.printPostorder());
        console.log(this.nombre, this.cumpleaños);
    }

    printInorder() {
        if (this.children.length === 2) {
            this.children[0].printInorder();
            console.log(this.nombre, this.cumpleaños);
            this.children[1].printInorder();
        } else if (this.children.length === 1) {
            console.log(this.nombre, this.cumpleaños);
            this.children[0].printInorder();
        } else {
            console.log(this.nombre, this.cumpleaños);
        }
    }
}

// Example usage:
const abuela = new Person("Maria Angela Bonilla Arango", new Date("02/06/1950"));
const madre = new Person("Elisa Aguilar LLano", new Date("03/12/1980"));
const padre = new Person("Eduardo Rodriguez Bonilla", new Date("01/02/1982"));

abuela.addChild(madre);
abuela.addChild(padre);

const hermano = new Person("Camilo Rodriguez Aguilar", new Date("06/09/2005"));
const hermana = new Person("Amanda Rodriguez Aguilar", new Date("04/05/2008"));

madre.addChild(hermano);
madre.addChild(hermana);

padre.addChild(hermano);
padre.addChild(hermana);

// Print family tree in pre-order
console.log("Pre-order:");
abuela.printPreorder();

// Print family tree in post-order
console.log("Post-order:");
abuela.printPostorder();

// Print family tree in-order
console.log("In-order:");
abuela.printInorder();
