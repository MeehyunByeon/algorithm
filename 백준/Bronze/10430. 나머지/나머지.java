import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int a = s.nextInt();
        int b = s.nextInt();
        int c = s.nextInt();
        System.out.format("%d\n",(a+b)%c);
        System.out.format("%d\n", ((a%c) + (b%c))%c);
        System.out.format("%d\n", (a*b)%c);
        System.out.format("%d", ((a%c) * (b%c))%c);
    }
}