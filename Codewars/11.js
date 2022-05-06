a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]



function inArray(array1,array2){
    let answer = []
    for (var i=0;i< array1.length; i++){
        for(var j =0; j<array2.length;j++){
            if (array2[j].includes(array1[i])){
                answer.push(array1[i])
            }
        }
    }
    deleteDublicates = uniq = [...new Set(answer)];
    answer = deleteDublicates.sort()
    return answer
}


console.log(inArray(array1= a1, array2=a2))








// describe("Tests", () => {
//     it("test", () => {
//   a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
  
//   a1 = ["xyz", "live", "strong"]
//   Test.assertSimilar(inArray(a1, a2), ["live", "strong"])
//   a1 = ["live", "strong", "arp"]
//   Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"])
//   a1 = ["tarp", "mice", "bull"]
//   Test.assertSimilar(inArray(a1, a2), [])

 