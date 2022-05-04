var myArray = [];


for (var i = 0; i < 11; i++) {
    myArray.push(i);
}
// while(i<5){
//     myArray.push(i);
//     i++
// }

console.log(myArray)
var mySecondArray = []
for (var i = 1; i<10; i+=2){
    mySecondArray.push(i)
}
console.log(mySecondArray)

var myArr = [2,3,4,5,6,7];
var ourTotal = 0;

for ( var i=0;i<myArray.length;i++){
    ourTotal+=myArray[i];

};
console.log('HERE')
console.log(ourTotal)

function multiplyAll(arr){
    var product = 1;
    for (var i=0; i<arr.length;i++){
        for (var j =0;j < arr[i].length;j++)
        product *= arr[i][j];
    }
    return product
}


var product = multiplyAll([[1,2],[3,4],[5,6,7]])

console.log(product)
// aloha = [[1,2],[3,4],[5,6,7]]
// for (var i =0; i < aloha.length;i++){
    // for (var j =0; j < aloha[i].length;j++){
        // console.log(aloha[i][j]);
    // }
// 
// }

