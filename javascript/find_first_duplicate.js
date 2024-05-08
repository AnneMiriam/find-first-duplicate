function findFirstDuplicate(arr) {
  // Set() object will allow us to store each element from the given array as a unique value
  let findUnique = new Set();
  // implement loop through the given array
  // Option 1
  for (let i = 0; i < arr.length; i++) {
    if (findUnique.has(arr[i])) {
      return arr[i];
    } 
    findUnique.add(arr[i]);
  }
  // // Option 2 (Given solution)
  // for (const value of arr) {
  //   if (findUnique.has(value)) {
  //     return value;
  //   } 
  //   findUnique.add(value);
  // }
  return -1;
}
console.log(findFirstDuplicate([1, 2, 3, 4, 5, 3, 4]));

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
