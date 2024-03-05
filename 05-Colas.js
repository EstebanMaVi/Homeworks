class Person {
    constructor(name, arrivalTime) {
        this.name = name;
        this.arrivalTime = arrivalTime;
    }
}

class ATMQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(person) {
        this.queue.push(person);
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

// Example data
const person1 = new Person("Alice", "10:00 AM");
const person2 = new Person("Bob", "10:15 AM");
const person3 = new Person("Charlie", "10:30 AM");

const atmQueue = new ATMQueue();
atmQueue.enqueue(person1);
atmQueue.enqueue(person2);
atmQueue.enqueue(person3);

console.log("ATM Queue:");
while (!atmQueue.isEmpty()) {
    const nextPerson = atmQueue.dequeue();
    console.log(`${nextPerson.name} arrived at ${nextPerson.arrivalTime}`);
}
