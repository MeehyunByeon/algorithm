import java.util.Scanner;

public class Main {
    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);
        long a = s.nextInt();
        long b = s.nextInt();
        if(a-b>0)
            System.out.format("%d", a-b);
        else if(a-b<0)
            System.out.format("%d", -(a-b));
    }
}