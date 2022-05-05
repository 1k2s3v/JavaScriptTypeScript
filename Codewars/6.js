
function toCamelCase(str) {
    let stringSplit = str.split("_")
    let answer = ""
    if (stringSplit.length == 1) {
        stringSplit = stringSplit[0].split("-")

    }
    var firstLetter = stringSplit[0][0]
    console.log(stringSplit)
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
    return answer
}

console.log(toCamelCase(str2))

