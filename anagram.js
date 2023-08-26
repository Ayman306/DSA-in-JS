/*
String anagram
'hello'-> 'llheo'
'ayman' -> 'aaymn'

condition
length check (both strings must be same)

map the letters 
ex - hello
{h:1,e:1,l:2,o:1}
and identify it with the other string
*/
function isAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    let counter ={}
    for (let letter of str1){
        counter[letter]=(counter[letter] || 0 )+1
        console.log(letter,counter);
    }
    for(let item of str2){
        if(!counter[item]){
            return false
        }
        counter[item]--
        console.log(counter,str2);
    }
    return true
}
result =isAnagram('hello','lleho')
console.log(result);