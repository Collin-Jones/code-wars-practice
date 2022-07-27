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

function highAndLow(nums){
    let numbers = nums.split(' ');
    let sorted = numbers.sort(function (a, b){
        return Number(a) - Number(b);
    });
    return sorted [0] + " " + sorted[sorted.length - 1];
}

function highAndLow(numbers){
    numbers = numbers.split(" ");
    return Math.max(...numbers) +" "+ Math.min(...numbers);
}

function highAndLow(numbers){
    numbers2=numbers.split(' ');
    var highest =parseInt(numbers2[0]);
    var lowest =parseInt(numbers2[0]);
    if (numbers2.length==1) {
        return numbers;
    }
    else {
        for (i=0;i<numbers2.length;i++) {
            if (parseInt(numbers2[i])>highest) {
                highest = parseInt(numbers2[i]);
            }
            else if (parseInt(numbers2[i])<lowest) {
                lowest = parseInt(numbers2[i]);
            }
        }
    }
    return(highest + " " + lowest);
}