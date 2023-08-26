/*
    Checking sum zero , get first pair who's sum is zero
    [-5,-4,-3,-2,0,2,4,6,8] -input
    [-4,4] - output
*/
function getSumPairZero(arr){
    for(let num of arr){
        for(let num2 of arr){
            if(num+num2 === 0){
               return console.log(num, num2);
            }
        }
    }
}
// getSumPairZero([-5,-4,-3,-2,0,2,4,6,8])

//refractor to n(n^2)
function getSumPairZero2(arr){
    left = 0
    right=arr.length-1
    while(left < right){
        sum=arr[left] + arr[right]
        if(sum ===0){
            return [arr[left] , arr[right]]
        }else if(sum >0){
            right--
        }else{
            left++
        }
    }
}

// let result= getSumPairZero2([-5,-4,-3,-2,0,2,4,6,8]);
// console.log(result);


/*
 get sum of first pair values gives 10 
[-5,-4,-3,-2,0,2,4,6,8] - input
[2,8] -output
*/
function getSumPairTen(arr){
    console.log(arr.length);
    left =0;
    right = arr.length-1
    while(left<right){
        sum = arr[left] + arr[right]
        console.log(sum,"sum");
        if(sum === 10){
            return [arr[left] , arr[right]]
        }else if(sum > 10){
            console.log([arr[left] , arr[right]]);
            right--
        }else{
            console.log([arr[left] , arr[right]]);
            left++
        }
    }
}
result = getSumPairTen([-5,-4,-3,-2,0,2,4,6,8])
console.log(result);

/*
9
3 sum
[ -5, 8 ]
4 sum
[ -4, 8 ]
5 sum
[ -3, 8 ]
6 sum
[ -2, 8 ]
8 sum
[ 0, 8 ]
10 sum
[ 2, 8 ]
*/