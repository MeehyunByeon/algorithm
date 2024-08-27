import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        int k =n, i, j, o;
        for(i = 0; i < n; i++)
        {
            for(j = k; j > 1; j--) 
            {
                System.out.print(" ");
            }
            for(o = 0; o < 2*(i+1)-1; o++)
            {
                System.out.print("*");
            }
            k--;
            System.out.print("\n");
        }
        k=n-1;
        for(i = 1; i < n; i++)
        {
            for(j = 0; j < i; j++)
            {
                System.out.print(" ");
            }
            for(o = 2*k-1; o > 0; o--)
            {
                System.out.print("*");
            }
            k--;
            System.out.print("\n");
        }
    }
}