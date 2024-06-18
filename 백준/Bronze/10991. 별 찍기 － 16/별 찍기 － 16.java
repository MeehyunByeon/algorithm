import java.util.Scanner;

public class Main 
{
    static void prints(int a, int b, int c)
    {
        for(int j = 1; j <= a; j++) System.out.print(" ");
        for(int j = 1; j <= b; j++) System.out.print("*");
        
        for(int j = 1; j <= c-1 ;j++) 
        {
            System.out.print(" ");
            for(int k = 1; k <= b; k++)
            {
                if(c==1) break; 
                System.out.print("*");
            }
        }
        System.out.println();
    }
    
    public static void main(String args[]) 
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        int k = n-1;
        for(int i = 1; i <= n; i++) 
        {
            prints(k,1,i);
            k--;
        }
    }
}