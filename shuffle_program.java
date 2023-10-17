import java.util.Random;
import java.util.Arrays;
public class Shuffle{
    static void random(int ar[], int n) {
        Random r = new Random();
        for (int i = n - 1; i > 0; i--) {
            int j = r.nextInt(i);
            int temp = ar[i];
            ar[i] = ar[j];
            ar[j] = temp;
        }
        System.out.println(Arrays.toString(ar));
    }
    public static void main(String[] args) {
        int[] ar = {1, 2, 3, 4, 5, 6, 7, 8};
        int n = ar.length;
        random(ar, n);
    }
}
