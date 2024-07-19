import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int tc, total, n, a;
        tc = s.nextInt();
        for(int i = 0; i < tc; i++)
        {
            n = s.nextInt();
            total = 0;
            for(int j = 0; j < n; j++)
            {
                a = s.nextInt();
                total += a;
            }
            System.out.format("%d\n",total);
        }        
    }
}