//Remember to remove node-modules before pushing to gitHub

// INQUIRER
const inquirer = require("inquirer");
// const { initQs } = require("../m30-node-demo/questions");

// const { initQs } = require("./questions")

// const { Pet } = require("./classes")


//main class
class animal {
    constructor(name, age, ) {
        this._name = name,
            this._age = age

    }



    get name() {
        return this._name
    }

    get age() {
        return this._age
    }

    play() {
        this._hunger++;
        this._thirst++;
        this._happiness++;
        this._loneliness--
    }

    feed() {
        this._hunger--;
        this._happiness++;
        this._loneliness--
    }

    water() {
        this._thirst--;
        this._happiness++;
        this._loneliness--
    }

    walk() {
        this._hunger++;
        this._thirst++;
        this._happiness++;
        this._loneliness--
    }

    stroke() {
        this._happiness++;
        this._loneliness--
    }


}


//SubClasses


class babyOtter extends animal {
    constructor(name, age) {
        super(name, age)
        this.species = "Otter"
        this._hunger = 40,
        this._thirst = 80,
        this._happiness = 50,
        this._loneliness = 80
    }
}

class babyChinchilla extends animal {
    constructor(name, age) {
        super(name, age)
        this.species = "Chinchilla"
        this._hunger = 90,
        this._thirst = 90,
        this._happiness = 40,
        this._loneliness = 40
    }
}

class babyHedgehog extends animal {
    constructor(name, age) {
        super(name, age)
        this.species = "Hedgehog"
        this._hunger = 50,
        this._thirst = 40,
        this._happiness = 90,
        this._loneliness = 90
    }
}

class babyRedPanda extends animal {
    constructor(name, age) {
        super(name, age)
        this.species = "Red Panda"
        this._hunger = 40,
        this._thirst = 50,
        this._happiness = 90,
        this._loneliness = 100
    }
}

class babyGiraffe extends animal {
    constructor(name, age) {
        super(name, age)
        this.species = "Giraffe"
        this._hunger = 80,
        this._thirst = 90,
        this._happiness = 50,
        this._loneliness = 30
    }
}

class babySloth extends animal {
    constructor(name, age) {
        super(name, age)
        this.species = "Sloth"
        this._hunger = 50,
        this._thirst = 60,
        this._happiness = 40,
        this._loneliness = 100
    }
}

//initial user questions

const init = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "petType",
                message: "What type of Pet would you like to choose?",
                choices: [
                    "Otter",
                    "Chinchilla",
                    "Hedgehog",
                    "Red Panda",
                    "Giraffe",
                    "Sloth"
                ]
            },
            {
                type: "input",
                name: "petName",
                message: "What is your pets name?"
            }
        ])
        .then((answers) => {
            pet = new Pet(answers.petType, answers.petName)
        })
        .then(() => gameLoop())
}
const gameLoop = () => {
    if (pet.health < 0) {
        console.log("Your pet died")
        return
    }
}

let pet = '';
const action = () =>{
    inquirer
        .prompt([
            {
                type: "rawlist",
                name: "action",
                message: "What would you like to do?",
                choices: ["Feed", "Give Water", "Play"],
            },
        ])
        .then((answers) => {
            if (answers.action === "Feed") {
                pet.feed()
            } else if (answers.action === "Play") {
                console.log("Playing...")
            } else {
                console.log("Drinking...")
            }

            console.table(pet)
        })
        .then(() => gameLoop())

}
init()

// //GameLoop functions

const hungerCheck = () => {

    if (pet._hunger > 120) {
        console.log("Pet died")
        return
    } else if (pet._hunger <= 115 && pet._hunger > 105) {
        console.log("Im Hungry!")
        return
    } else if (pet._hunger <= 105) {
        console.log("Im full.")
        return
    }
}

const thirstCheck = () => {

    if (pet._thirst > 120) {
        console.log("Pet died")
        return
    } else if (pet._thirst <= 115 && pet._thirst > 105) {
        console.log("Im thirsty")
        return
    } else if (pet._thirst <= 105) {
        console.log("Im not thirsty")
        return
    }

}

const happinesCheck = () => {

    if (pet._happiness > 120) {
        console.log("Im soo happy! I love you")
    } else if (pet._hapiness <= 115 && pet._hunger > 105) {
        console.log("Im happy")
        return
    } else if (pet._hapiness <= 105) {
        console.log("Im sad, dont you want to play?")
        return
    }
}

const lonelinessCheck = () => {

    if (pet._loneliness > 120) {
        console.log("where have you been...dont you love me?")
    } else if (pet._lonliness <= 115 && pet._hunger > 105) {
        console.log("You're my friend")
        return
    } else if (pet._loneliness <= 105) {
        console.log("you're the best friend I've ever ever had!")
        return
    }
}



const actionCheck = () => {
    if (action === "play") {
        pet.play()
        return
    } else if (action === "feed") {
        pet.feed()
        return
    } else if (action === "water") {
        pet.water()
        return
    } else if (action === "walk") {
        pet.walk()
        return
    } else if (action === "stroke") {
        pet.stroke()
        return
    }
}



//Game Mechanics

const gameLoop = () => {
    actionCheck()
    hungerCheck()
    thirstCheck()
    happinesCheck()
    lonelinessCheck()

    console.log(pet)
}



let action = "stroke"

let Pet = {
    species: "chinchilla",
    name: "sally"
}


const init = () => {

    if (Pet.species === "otter") {
        pet = new babyOtter(Pet.name, 2)
    } else if (Pet.species === "chinchilla") {
        pet = new babyChinchilla(Pet.name, 0)
    }

    gameLoop()
}


init()
