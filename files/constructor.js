class Animal {
    constructor(name, energy) {
        this.name = name
        this.energy = energy
    }
    eat(amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    }
    sleep(length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    }
    play(length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }
}

class Dog extends Animal {
    constructor(name, energy, breed) {
        super(name, energy)
        this.breed = breed
    }
    barck() {
        console.log('Woof Woof!')
        this.energry -= .1
    }
}

const charlie = new Dog('Charlie', 10, 'CockerSpaniel')

console.log(charlie)

charlie.play(5)
console.log(charlie)
