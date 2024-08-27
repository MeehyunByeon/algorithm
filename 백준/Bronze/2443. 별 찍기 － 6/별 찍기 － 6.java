import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        int k =n;
        for(int i = 0; i < n; i++)
        {
            for(int j = 0; j < i;j++)
            {
                System.out.print(" ");
            }
            for(int o = 2*k-1; o > 0; o--)
            {
                System.out.print("*");
            }
            k--;
            System.out.print("\n");
        }
    }
}