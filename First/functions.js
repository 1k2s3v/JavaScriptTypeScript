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

console.log(myOutfit())
console.log(outerWear)
