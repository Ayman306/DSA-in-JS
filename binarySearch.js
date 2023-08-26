/*
Divide and conqure 
Find the index of given no in a sorter array =>7 
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] => index 6 -output

min =0
max = arr.length -1
mid = (min + max) / 2;
if arr[minindex] < number7
    minindex +1
    else
if(arr[minindex]>number)
maxindex minindex-1
min =0,
otherwise result is minINndex
*/
function binarySearch(arr,num){
    let min =0
    let max= arr.length -1
    while(min<=max){
        mid =Math.floor( (min + max) / 2)
        console.log(mid,"mid",min,"min",max,"max");
        if(arr[mid] === num){
            return `Found in position ${mid+1}`
        }
        if(arr[mid] < num){
            min = mid  + 1          
        }else{
            max =mid+1            
        }
    }
    return -1
}
let result = binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],8)
console.log(result)