import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);
        int a = s.nextInt();
        int b = s.nextInt();
        System.out.format("%d\n", a+b);
        System.out.format("%d\n", a-b);
        System.out.format("%d\n", a*b);
        System.out.format("%d\n", a/b);
        System.out.format("%d", a%b);
    }
}