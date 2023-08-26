/*
Count Unique number
[1,1,2,2,3,3,4,5,6,7,8,8]
output -> 8

take i =0 j=1
if i ==j then continue j++
if i !=j then 
i++
arr[i]=arr[j]
*/

function countUnique(arr){
    let i=0
    let j=1
   if(arr.length>0){
    let i =0;
    for (j=1;j<arr.length;j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i]=arr[j]
        }
    }
    return i+1
   }else{
       return "Empty String"
   }

}
result = countUnique([1,1,2,2,3,3,4,5,6,7,8,8,8,9,9,9])
console.log(result);