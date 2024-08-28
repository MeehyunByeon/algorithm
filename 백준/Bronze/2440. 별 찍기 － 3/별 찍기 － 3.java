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
            for(int o = k; o > 0; o--)
            {
                System.out.print("*");
            }
            k--;
            System.out.print("\n");
        }
    }
}