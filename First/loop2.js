var myArray = [];
var i = 10;



do {
    myArray.push(i);
    i++
} while (i < 5);
console.log(myArray)


var contacts = [{
    "firstName": "Harry",
    "last_Name": "Potter",
    "number": "1",
    "likes": ["hogwarts", 'Magic', "Hagrid"]
}, {
    "firstName": "AAA",
    "last_Name": "BBB",
    "number": "2",
    "likes": ["3", '4', "6"]

}]



function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Harry", "likes");

console.log(data);

