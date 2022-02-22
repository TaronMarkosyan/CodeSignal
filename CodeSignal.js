//1
const solution = (a, b) => a + b;
//2
function solution(year) {
    return Math.ceil(year / 100);
}
//3
function solution(inputString) {
    inputString = inputString.split('');
    let a = Math.floor(inputString.length / 2);
    for(let i = 0;i < a;i++){
        if(inputString[i] !== inputString[inputString.length - i - 1]) return false;
    }
    return true;
}
//4
function solution(inputArray) {
    let arr = [];
    for(let i = 0; i < inputArray.length-1; i++){
     if(inputArray[i] * inputArray[i + 1] > inputArray[i + 1] * inputArray[i + 2]){
         arr.push(inputArray[i] * inputArray[i + 1])
     }else {
     arr.push(inputArray[i + 1] * inputArray[i])
    }
    }
    return Math.max(...arr);
}
//5
function solution(n) {
    return n*n+(n-1)*(n-1);
}
//6
function solution(statues) {
    let sum = 0;
    statues = statues.sort((a,b) => a - b);
    for(let i = 0; i < statues.length-1; i++){
        if(statues[i + 1] - statues[i] !== 1){
           sum += (statues[i + 1] - statues[i]) - 1;
        }
    }
    return sum;
}
//7
function solution(sequence){
    let c = 0;
        for(let i = 0; i < sequence.length;i++) {
            if((sequence[i] >= sequence[i+1]) || ((sequence[i-2]>=sequence[i]&&sequence[i-1]>=sequence[i+1]))){
            c++
            }   
        }
         return(c==0 || c==1);
    }
//8
function solution(matrix) {
    let c = 0;
    for(let i = 0;i < matrix[0].length; i++){
        for(let j = 0;j < matrix.length; j++){
            if(matrix[i] === 0 && matrix[j] === 0){
                break;
            }else{
             c = c + matrix[i] + matrix[j];
            }
        }
    }
    return c;
}
//9
function solution(inputArray) {
    let length = 0;
    for(const value of inputArray){
        length = Math.max(length, value.length) 
    }
    return inputArray.filter(element => element.length === length);
}
//10
function solution(s1, s2) {
    let krknvox = 0;
    for(let i = 0; i < s1.length; i++) {
        let j = s2.indexOf(s1[i]);
        if(j >= 0){
            krknvox++;
            s2 = s2.replace(s1[i],'');
        }
    }
    return krknvox;
}
//11
function solution(n) {
    let a = n.toString();
    let firstHalf = a.slice(0,a.length / 2);
    let secondHalf = a.slice(a.length / 2,a.length);
    let arr1 = firstHalf.split('');
    let arr2 = secondHalf.split('');
    let sum1 = arr1.reduce((a,b) => Number(a) + Number(b));
    let sum2 = arr2.reduce((a,b) => Number(a) + Number(b));
    return sum1 === sum2;
}
