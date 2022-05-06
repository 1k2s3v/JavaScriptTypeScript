var alphabetAsObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
}


function findMissingLetter(array) {
  var numbers = []
  const isUpperCase = (string) => /^[A-Z]*$/.test(string)
  isArrayApperCased = isUpperCase(array[0])
  array = array.map(letter => letter.toLowerCase())
  for (var i = 0; i < array.length; i++) {
    numbers.push(alphabetAsObject[array[i]])
  }
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i + 1] - numbers[i] > 1) {
      var val = numbers[i + 1] - 1
      var missingLetter = Object.keys(alphabetAsObject).find(key => alphabetAsObject[key] === val)
    }
  }

  if (isArrayApperCased) {
    missingLetter = missingLetter.toUpperCase()
  }

  return missingLetter;
}

console.log(findMissingLetter(['A', 'B', 'C', 'D', 'F']))
