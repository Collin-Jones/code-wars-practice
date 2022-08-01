// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return Math.min(...args)
//     }
// }


// function getGrade (s1, s2, s3) {
//     let score = (s1 + s2 + s3) / 3;
//
//     if(score >= 90 && score <= 100){
//         return "A";
//     }else if(score >= 80 && score <= 90){
//         return "B";
//     }else if(score >= 70 && score <= 80){
//         return "C";
//     }else if(score >= 60 && score <= 70){
//         return "D";
//     }else{
//         return "F";
//     }
// }
// getGrade(40, 64, 90)

// function highAndLow(nums){
//     let numbers = nums.split(' ');
//     let sorted = numbers.sort(function (a, b){
//         return Number(a) - Number(b);
//     });
//     return sorted [0] + " " + sorted[sorted.length - 1];
// }
//
// function highAndLow(numbers){
//     numbers = numbers.split(" ");
//     return Math.max(...numbers) +" "+ Math.min(...numbers);
// }
//
// function highAndLow(numbers){
//     numbers2=numbers.split(' ');
//     var highest =parseInt(numbers2[0]);
//     var lowest =parseInt(numbers2[0]);
//     if (numbers2.length==1) {
//         return numbers;
//     }
//     else {
//         for (i=0;i<numbers2.length;i++) {
//             if (parseInt(numbers2[i])>highest) {
//                 highest = parseInt(numbers2[i]);
//             }
//             else if (parseInt(numbers2[i])<lowest) {
//                 lowest = parseInt(numbers2[i]);
//             }
//         }
//     }
//     return(highest + " " + lowest);
// }
//
// function highAndLow(numbers){
//     num=numbers.split(' ');
//     var max = parseInt(num[0]);
//     var min = parseInt(num[0]);
//     for (var i = 0; i <= num.length; i++) {
//         if(parseInt(num[i]) > max){
//             max = parseInt(num[i]);
//         }
//     }
//     for (var i = 0; i <= num.length; i++) {
//         if(parseInt(num[i]) < min){
//             min = parseInt(num[i]);
//         }
//     }
//     return (max + " " + min);
// }

// function removeEveryOther(arr){
//     return arr.filter((_, idx) => idx % 2 === 0);
// }

// function sumArray(array)  {
//     if(array && array.length > 1) {
//         const sortedArray = array.sort((a,b) => a - b).slice(1, -1)
//         return sortedArray.reduce((acc, cur) => acc + cur, 0)
//     }
//
//     return 0
// }

// const reverseSeq = n => {
//     let array = [];
//     for (let i = n; i >= 1; i--) {
//         array.push(i);
//     }
//     return array;
// }

// function areYouPlayingBanjo(name) {
//     if (name.toLowerCase().charAt(0) == 'r'){
//         name = name + ' plays banjo';
//     }else{
//         name = name + ' does not play banjo';
//     }
//     return name;
// }

// function positiveSum(arr) {
// let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) sum += arr[i]
//     }
//     return sum;
// }

// function bmi(weight, height) {
//     const x = weight / height ** 2;
//     return x <= 18.5 ? "Underweight" : x <= 25.0 ? "Normal" : x <= 30.0 ? "Overweight" : "Obese";
// }

// const areaOrPerimeter = function(l , w) {
//     return l === w ? w * l : l * 2 + w * 2
// };

// function sumTwoSmallestNumbers(numbers) {
//     let result = numbers.sort((a, b) => a - b).slice(0 , 2);
//
//     let sum = 0;
//     for (let i = 0; i < result.length; i++) {
//         sum += result[i];
//     }
//     return sum;
// }


// function betterThanAverage(classPoints, yourPoints) {
// const average = classPoints.reduce((x , y) => x + y, 0) / classPoints.length;
//
// return average <= yourPoints
// }

// function isTriangle(a,b,c) {
//     let max = Math.max(a,b,c);
//     let sum = a + b + c;
//     return sum - max > max;
// }

function solution(str){
    return str.split('').reverse().join('')
}

function isSquare(n){
    return Math.sqrt(n) % 1 === 0
}

function rowSumOddNumbers(n) {
    return n * n * n;
}

function longest(s1, s2) {

    let a = [... new Set(s1.split(''))];
    let b = [... new Set(s2.split(''))];

    for (let i = 0; i < b.length; i++) {
        a.push(b[i]);
    }

    let initcombo = [... new Set(a)];
    let combo = initcombo.sort().join('')

    return combo;
}