/*
Bubble sort
The largest value is set to its positions first
*/
function isSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
function bubbleSort(arr) {
  if (isSort(arr)) {
    return arr;
  }
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
const res = bubbleSort([5, 3, 4, 1, 2, 8, 6, 7]);
console.log(res);
