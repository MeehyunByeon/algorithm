import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int i, n=8, a=0, d=8, p;
        for(i = 1; i <= n; i++)
        {
            p = s.nextInt();
            if(p==i) a++;
            else if(p==n-i+1) d--;
        }
        if(a==8) System.out.print("ascending");
        else if(d==0) System.out.print("descending");
        else System.out.print("mixed");
    }
}