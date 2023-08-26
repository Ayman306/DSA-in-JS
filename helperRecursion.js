/*
Helper recursion
[1,2,3,4,5,6,7,8,9,10]\
[1,3,5,7,9] => output

calling function wihtin the function caling recursively
*/
function findOdd(arr) {
  let result = [];
  function helperRecurs(inArray) {
    if (inArray.length === 0) {
      return;
    }
    if (inArray[0] % 2 !== 0) {
      console.log(inArray, "mod");
      result.push(inArray[0]);
    }
    console.log(inArray, "inArray");
    helperRecurs(inArray.slice(1)); //called recursively
  }
  helperRecurs(arr); //first function call
  return result;
}
const result = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result, "Sorted with recursion");
