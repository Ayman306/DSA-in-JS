/*
Linear search 
*/
const users = [
  { name: "sam", email: "sam@gmail.com" },
  { name: "joe", email: "joe@gmail.com" },
  { name: "john", email: "john@gmail.com" },
  { name: "jane", email: "jane@gmail.com" },
];

function userExists(arr, val) {
  for (let item of arr) {
    if (item["name"] === val) {
      return `Exists`;
    } else {
      return `Not exists`;
    }
  }
}
result = userExists(users, "sam");
console.log(result);
