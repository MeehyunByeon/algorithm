import java.util.Scanner;

public class Main
{
    static void prints(int v, int n)
    {
        int star = 0;
        // 좌 영역
        for(int i = 0; i < v; i++) 
        {   
            star = 1 - star;
            System.out.print((star == 1) ? "*" : " ");
        }
        // 중앙 영역
        for(int i = 0; i < n+n-1; i++) 
        {   
            System.out.print((n % 2 ==1) ? "*" : " ");
        }
        // 우 영역
        for(int i = 0; i < v; i++) 
        {   
            System.out.print((star == 1) ? "*" : " ");
            star = 1 - star;
        }
        System.out.println();
    }
    
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        n = 2 * n - 1;
        
        int i;
        {
            for(i = n; i >= 1; i--) prints(n-i, i);
            for(i = 2; i <= n; i++) prints(n-i, i);
        }
    }
}