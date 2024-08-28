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
            for(int j = k; j > 1; j--) 
            {
                System.out.print(" ");
            }
            for(int o = 0; o < i+1; o++)
            {
                System.out.print("*");
            }
            k--;
            System.out.print("\n");
        }
    }
}