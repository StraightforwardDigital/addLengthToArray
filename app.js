function addLength(str) {
//split the string into an array of words
  let words = str.split(" ");
//find the length of the each word one by one with a for loop
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word + " " + word.length;
  }
  //return the new array with the words and their letter count
  return words;
}