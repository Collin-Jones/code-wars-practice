// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return Math.min(...args)
//     }
// }


function getGrade (s1, s2, s3) {
    var score = (s1 + s2 + s3) / 3;

    if(90 >= score <= 100){
        return "A";
    }else if(80 >= score <= 90){
        return "B";
    }else if(70 >= score <= 80){
        return "C";
    }else if(60 >= score <= 70){
        return "D";
    }else{
        return "F";
    }
}
getGrade(40, 64, 90)