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
