import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();

        boolean isPangram = checkIfPangram(input);
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
    public static boolean checkIfPangram(String input) {
        input = input.toLowerCase();
        boolean[] lettersFound = new boolean[26];
        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                int index = c - 'a';
                lettersFound[index] = true;
            }
        }
        for (boolean found : lettersFound) {
            if (!found) {
                return false;
            }
        }

        return true;
    }
}
