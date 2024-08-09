import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int a = s.nextInt();
        int b = s.nextInt();
        System.out.format("%d\n", a*(b%10));
        System.out.format("%d\n", a*((b/10)-10*(b/100)));
        System.out.format("%d\n", a*(b/100));
        System.out.println(a*b);
    }
}