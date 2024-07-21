import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        int p=0;
        for(int i = 1; i <= n; i++)
            p+=i;
        System.out.format("%d", p);
    }
}