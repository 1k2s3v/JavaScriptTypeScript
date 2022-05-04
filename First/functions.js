function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "the "+myAdjective + " "+myNoun +""+ myVerb+ "to the store"
    return result;

}
console.log(wordBlanks("dog","small","ran","fast"))

function myLocalScope(){
    var myVar = 5;
    console.log(myVar);

}
myLocalScope();

var outerWear = "T-shirt"
function myOutfit(){




    var outerWear = "sweater";
    return outerWear
}

function timesFive(num){
    return num*5;
}
console.log(timesFive(num=5));

var sum = 0;
function addThree(){
    sum +=3;
}
console.log(sum)
addThree()
console.log(sum)
addThree()
console.log(sum)

function ourTrueOrFalse(isItTrue){
    if (isItTrue == 3){
        return "yes it's tru"
    }
    return "no, it's false "
}



console.log(ourTrueOrFalse("3"));



function isLess(a,b){
    return a<b;

}
   
console.log(isLess(16,15));