var input = [[45, 12],[55,21],[19, -2],[104, 20]]// var output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
    let output = []
    for (var i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] >= 7) {
            output.push("Senior")
        }else{
            output.push("Open")
        } 
    }
    return output
}

console.log(openOrSenior(data = input))


function openOrSenior2(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }

console.log(openOrSenior2(data=input))