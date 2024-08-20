import java.util.Scanner;

public class Main 
{
    static void prints(int a, int b)
    {
        for(int j = 1; j <= b; j++) System.out.print("*");System.out.println();
    }
    
    public static void main(String args[]) 
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        for(int i = 1; i <= n; i++) prints(n-i,i);
        for(int i = 1; i <= n-1; i++) prints(i,n-i);
    }
}