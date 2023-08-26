/*
[1,2,3,4,3,5,4,6,7,8] 
count largest sum of consecutive digits
num =4
sum = 25

conditions 
num shouldnt be greater than array
totalnumber of array - num + 1 => ?
*/
function findLargest(arr,num){
    if(num>arr){
        return -1
    }else{
        let max=0;
        for(let i=0 ; i<arr.length - num +1;i++){
            let temp =0;
            for(let j=0; j<num;j++){
                console.log('i',i,'j',j);
                temp+=arr[i+j]
            }
            if(temp >max){
                max=temp
            }
        }
        return max
    }
}
let result = findLargest([1,2,3,4,3,5,4,6,7,8] , 3)
console.log(result);