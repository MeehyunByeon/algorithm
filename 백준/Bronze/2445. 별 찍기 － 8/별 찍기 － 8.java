import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        int i, j, k=n;
        for(i = 0; i < n; i++)
        {
            for(j = 0; j < i+1 ; j++)
            {
                System.out.print("*");
            }
            for(j = 0; j < 2*k-2;j++)
            {
                System.out.print(" ");
            }
            k--;
            for(j = 0; j < i+1 ; j++)
            {
                System.out.print("*");
            }
            System.out.print("\n");
        }
        k = n-1;
        for(i = 1; i < n; i++)
        {
            for(j = k; j > 0; j--)
            {
                System.out.print("*");
            }
            for(j = 0; j < i*2;j++)
            {
                System.out.print(" ");
            }
            for(j = k; j > 0; j--)
            {
                System.out.print("*");
            }
            k--;
            System.out.print("\n");
        }
    }
}