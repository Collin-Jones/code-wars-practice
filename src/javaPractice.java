import java.util.Scanner;


import static javax.swing.text.html.HTML.Attribute.N;

public class javaPractice {

//    public static Integer basicMath(String op, int v1, int v2) {
//        switch (op) {
//            case "+":
//                return v1 + v2;
//            case "-":
//                return v1 - v2;
//            case "*":
//                return v1 * v2;
//            case "/":
//                return v1 / v2;
//        }
//
//        return 0;
//    }

//    public static String noSpace(final String x) {
//        String str = null;
//        char[] strArray = str.toCharArray();
//        StringBuffer stringBuffer = new StringBuffer();
//
//        for (int i = 0; i < strArray.length; i++) {
//            if ((strArray[i] != ' ') && (strArray[i] != '\t')){
//                stringBuffer.append(strArray[i]);
//            }
//        }
//        String noSpaceStr2 = stringBuffer.toString();
//        System.out.println(noSpaceStr2);
//        return x;
//    }
//wasn't able to solve this one...
//    public static int grow(int[] x){
//        int solution[] = new int[0];
//        int a = 1;
//        for (int i = 0; i < a; ++i) {
//            solution[i] = a;
//
//        }
//        return 0;
//
//    }

//    public static String even_or_odd(int number) {
//        //Place code here
//        Scanner scanner = new Scanner(System.in);
//        System.out.println("Enter any number : ");
//        int aNumber = scanner.nextInt();
//
//        if((aNumber % 2) == 0){
//            System.out.println("number %d is even number %n", aNumber);
//        }else{
//            System.out.println("number %d is odd number %n", aNumber);
//        }
//    }


//    public static double sum(double[] numbers) {
//
//        double sum = 0;
//        for (int i = 0; i < numbers.length; i++) {
//            sum = sum + numbers[i];
//        }
//        return 0.0;
//    }

    public static int simpleMultiplication(int n) {
        if (n % 2 == 0) {
            return n * 8;
        } else {
            return n * 9;
        }
    }

    public static String boolToWord(boolean b) {
        if (b == true) {
            return "yes";
        } else {
            return "no";
        }
    }

    public static String greet(String name) {
        return "Hello, " + name + " how are you doing today?";
    }

//    public static void main(String[] args) {
//        System.out.println(greet("Mom"));
//    }

    public static int[] countPositivesSumNegatives(int[] input) {
        if (input == null || input.length == 0) return new int[]{};
        int count = 0, sum = 0;
        for (int i : input) {
            if (i > 0) count++;
            if (i < 0) sum += i;
        }
        return new int[]{count, sum};
    }


    public static int summation(int n) {
        int sum = 0;
        for (int i = 0; i <= n; i++) {
            sum += i;
        }
        return sum;
    }

    public static void main(String[] args) {
        System.out.println(summation(8));
    }
}


