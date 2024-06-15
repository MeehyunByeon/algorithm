import java.util.Scanner;

public class Main 
{
    static void prints(int a, int n)
    {
        switch(a%2)
        {
            case 1:
                {
                    for(int i = 1; i <= n/2; i++)
                        System.out.print("* ");
                } if(n%2==1) System.out.print("* ");
                break;
            case 0:
                for(int i = 1; i <= n/2; i++)
                    System.out.print(" *");
                break;
        }
        System.out.println();
    }
    
    public static void main(String args[]) 
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        if(n==1) System.out.print("*");
        else if(n>1)
        {
            for(int i = 1; i <= 2*n; i++) 
            {
                prints(i, n);
            }
        }
    }
}