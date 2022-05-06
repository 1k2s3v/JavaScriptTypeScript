
var RomeNumbers = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000,
}


var text = 'CD';
console.log(solution(roman = text));

function solution(roman){
    let = answer = 0;
    for(var i =0;i<roman.length;i++){
        if (RomeNumbers[roman[i+1]]> RomeNumbers[roman[i]]){
            answer+= RomeNumbers[roman[i+1]]-RomeNumbers[roman[i]]
        }else if((i>0 && RomeNumbers[roman[i]]> RomeNumbers[roman[i-1]])){
            // 
        }else{
            answer += RomeNumbers[roman[i]]
        }
    }
    return answer
}
var text = 'MMMDCCCXLIII';
console.log(solution(roman = text));