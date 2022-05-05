var str1 = "the-stealth-warrior"
// gets converted to "theStealthWarrior"
var str2 = "The_Stealth_Warrior"
// gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    
    if(str == ''){
        let answer = str+"An empty string was provided but not returned"
        return answer
    }
    var stringSplit = str.split("_")
    let answer = ""
    if (stringSplit.length == 1) {
        stringSplit = stringSplit[0].split("-")

    }
    var firstLetter = stringSplit[0][0]

    if (firstLetter == firstLetter.toUpperCase()) {

        var uppercased = stringSplit.map(name => name[0].toUpperCase() + name.slice(1));

    } else {
        var forUpercasing = stringSplit.slice(1)
        var uppercased = forUpercasing.map(name => name[0].toUpperCase() + name.slice(1));
        uppercased = [stringSplit[0], ...uppercased]
    }

    for (var i = 0; i < uppercased.length; i++) {
        answer += uppercased[i]
    }
    answer += ','+`"toCamelCase(${str}) did not return correct value"`
    return answer
}

// Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
// Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
// Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
// Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")



console.log(toCamelCase(str1))

