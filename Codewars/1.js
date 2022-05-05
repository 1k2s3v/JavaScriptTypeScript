// var names = ["Peter","Alex","Denis","Trevor","elis",'Dave']
// function likes(names) {
//   if(names.length == 0){
//     return "no one likes this"
//   }
//   if (names.length == 1){
//       return names[0] + ' likes this'
//   }
//   if (names.length == 2){
//       return names[0]+' and ' +names[1] +' like this'
//   }
//   if (names.length == 3){
//       return names[0]+ ', '+ names[1]+ ' and '+ names[2]+ ' like this'

//   }
//   if (names.length >= 4){

//       let amountOfElseLiked = (names.length-2);
//       return names[0]+ ', '+ names[1] +' and '+ amountOfElseLiked+ ' others like this' 
//   }
  
// }
var names = ['aloha','a','b','c','s']
function likes(names){
    switch (names.length){
        case 0:
            return "no one likes this"
        case 1:
            return names[0] + ' likes this'

        case 2:
            return names[0]+' and ' +names[1] +' like this'
        case 3:
            return names[0]+ ', '+ names[1]+ ' and '+ names[2]+ ' like this'

        default:
            let amountOfElseLiked = (names.length-2);
            return names[0]+ ', '+ names[1] +' and '+ amountOfElseLiked+ ' others like this' 

    }
}


console.log(likes(names))