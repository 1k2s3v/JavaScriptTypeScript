var ourDog = {
    "name": "Camper",
    "legs":4,
    "tails":1,
    "friends":["everything!"]
}


console.log(ourDog.name )
console.log(ourDog.hasOwnProperty("nadme"))

var myStorage = {
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger sear":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
}

console.log(myStorage.car.inside["glove box"])