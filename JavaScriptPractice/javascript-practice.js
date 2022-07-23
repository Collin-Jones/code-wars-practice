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

let arr = ['Tarkov', 'Is', 'Amazingly', 'a', 'Trash', 'Game']
function removeEveryOther(arr){
    for (let i = 0; i < arr.length; i++) {
        arr.splice(i + 1);
    }
}
removeEveryOther(arr)
console.log(arr)
