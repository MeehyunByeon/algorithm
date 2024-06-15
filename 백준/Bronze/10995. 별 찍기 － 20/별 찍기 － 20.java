import java.util.Scanner;

public class Main 
{
    static void prints(int a, int n)
    {
        switch(a%2)
        {
            case 0:
                for(int j = 1; j <= n; j++)
                    System.out.print(" *");
                break;
            case 1:
                for(int j = 1; j <= n; j++)
                    System.out.print("* ");
                break;
        }
        System.out.println();
    }
    
    public static void main(String args[]) 
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        for(int i = 1; i <= n; i++ ) 
        {
            prints(i, n);
        }
    }
}