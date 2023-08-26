/*
Checking square in another array
arr1=[1,2,3,4]
arr2=[1,9,4.16]

if arr1[i] * arr[j] === arr2[j]
return true
*/
function squareCheck(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] * arr1[i] === arr2[j]) {
        return true;
      }
      if (j === arr2.length - 1) {
        return false;
      }
    }
  }
}
result = squareCheck([1, 2, 3], [4, 9, 1]);
// console.log(result)

// refractoring code

function squareCheck1(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i] * arr1[i])) {
      return true;
    }
  }
  return false;
}
result2 = squareCheck([1, 2, 3], [4, 9, 1]);
// console.log(result2);

//refractor
/*
Checking square in another array
arr1=[1,2,2,4]
arr2=[1,4,4.16]

map1 ={1:1,2:2,4:1}
map2={1:1,4:2,16:1}
*/
function checkSquare(arr1, arr2) {
  let map1 = {};
  let map2 = {};
  for (item of arr1) {
    map1[item] = (map1[item] | 0) + 1;
  }
  console.log(map1, "map1");
  for (item2 of arr2) {
    map2[item2] = (map2[item2] | 0) + 1;
  }
  console.log(map2, "map2");
  for (let key in map1) {
    console.log(key, "key");
    if (!map2[key * key]) {
      return false;
    }
    if (map1[key] !== map2[key * key]) {
      return false;
    }
  }
  return true;
}
result3 = checkSquare([1, 2, 3, 2], [4, 9, 1, 4]);
console.log(result3);
