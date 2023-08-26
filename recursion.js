/*
Recursion : When the function calls itself

*/
i = 1;
function recur() {
  console.log("Hello");
  i++;
  if (i == 6) {
    return;
  }
  recur();
}
// recur();
/*
sort an array using recursion 
[2,3,1,4]
if second number is less than first then swap

*/
i = 0;
j = 1;
myArray = [2, 3, 1, 4];
myNewList = [];

function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr);
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
function sort(arr) {
  if (isSorted(arr)) {
    myNewList = arr;
    return;
  } else if (arr[i] < arr[j]) {
    i++;
    j++;
    sort(arr);
  } else {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i = 0;
    j = 1;
    sort(arr);
  }
}
sort(myArray);
console.log("Result", myNewList);
