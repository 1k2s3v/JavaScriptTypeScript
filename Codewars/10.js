// Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
// Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')



// complete the function
function solution(string) {
    let answer = ""
    const isUpperCase = (string) => /^[A-Z]*$/.test(string)
    for(var i = 0; i<string.length; i++){
        if (isUpperCase(string[i])){
            answer+=' '+string[i]
        }else{
            answer+= string[i]
        }
    }
    return answer
}




console.log(solution(string = 'camelCasing'))