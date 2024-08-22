import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        //String[] numbers = s.next().split(" ");
        int a = s.nextInt();
        int b = s.nextInt();
        int c = s.nextInt();
        int d = s.nextInt();
        int e = s.nextInt();
        int i = (a*a+b*b+c*c+d*d+e*e)%10;
        System.out.format("%d", i);
    }
}