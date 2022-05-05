input = "9s is2 Thi1s T4est 3a a5 a0" 

function order(words){
    var words = words.split(" ");
    let object = {};
    let answer = ""
    for (var i= 0; i< words.length; i++){
        object[words[i].replace(/\D/g, "")] = words[i]         
    }
    const valuesForAnswer = Object.values(object)
    for (const key of valuesForAnswer) {
        answer += key +' '
    }
    return answer
}
console.log(order(words = input))




