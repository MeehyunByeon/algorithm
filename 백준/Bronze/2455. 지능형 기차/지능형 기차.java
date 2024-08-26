import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int max=0, a, b, c, d, e, f; 
        int a1=s.nextInt(); int b1=s.nextInt();
        int a2=s.nextInt(); int b2=s.nextInt();
        int a3=s.nextInt(); int b3=s.nextInt();
        int a4=s.nextInt(); int b4=s.nextInt();
        a= a1+b1; b= a-a2+b2; c= b-a3+b3; d= c-a4+b4;
        e = (a>b ? a : b); f = (c>d ? c : d);
        System.out.format("%d", (e>f) ? e : f);
    }
}