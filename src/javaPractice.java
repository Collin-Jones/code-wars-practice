public class javaPractice {

    public static Integer basicMath(String op, int v1, int v2) {
        switch (op) {
            case "+":
                return v1 + v2;
            case "-":
                return v1 - v2;
            case "*":
                return v1 * v2;
            case "/":
                return v1 / v2;
        }

        return 0;
    }

    public static String noSpace(final String x) {
        String str = null;
        char[] strArray = str.toCharArray();
        StringBuffer stringBuffer = new StringBuffer();

        for (int i = 0; i < strArray.length; i++) {
            if ((strArray[i] != ' ') && (strArray[i] != '\t')){
                stringBuffer.append(strArray[i]);
            }
        }
        String noSpaceStr2 = stringBuffer.toString();
        System.out.println(noSpaceStr2);
        return x;
    }
}

