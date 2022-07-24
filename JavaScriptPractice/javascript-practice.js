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

const areaOrPerimeter = function(l , w) {
    return l === w ? w * l : l * 2 + w * 2
};