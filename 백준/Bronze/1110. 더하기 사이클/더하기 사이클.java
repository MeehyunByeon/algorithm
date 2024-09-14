import java.util.Scanner;

public class Main
{
    static void cycle(int i)
    {
        int n = i, j = 1, a, b;
        a = i/10+i%10; b = 10*(i%10)+a%10;
        while(b!=n)
        {
            a = (b/10)+(a%10);
            b = 10*(b%10)+a%10;
            j++;
        }
        System.out.format("%d",j);
    }
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int a = s.nextInt();
        cycle(a);
    }
}