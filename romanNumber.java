import java.util.Scanner;

public class RomanToIntegerConverter {

    public static int romanToInt(String s) {
        if (s == null || s.length() == 0)
            return 0;

        int result = 0;

        for (int i = 0; i < s.length(); i++) {
            int currentDigit = getRomanValue(s.charAt(i));
            int nextDigit = (i < s.length() - 1) ? getRomanValue(s.charAt(i + 1)) : 0;

            if (currentDigit < nextDigit) {
                result -= currentDigit;
            } else {
                result += currentDigit;
            }
        }

        return result;
    }

    private static int getRomanValue(char c) {
        switch (c) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");
        String romanNumeral = scanner.nextLine().toUpperCase(); 
        scanner.close();
        int result = romanToInt(romanNumeral);
        System.out.println("The integer equivalent of " + romanNumeral + " is: " + result);
    }
}
