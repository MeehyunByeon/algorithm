import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int m = s.nextInt(); int n = s.nextInt();
        int i, j, total = 0, min=n;
        for(i = n; i >= m; i--)
        {
            if(i==2)
            {
                total+=2;
                if(min>i) min = i;
                break;
            }
            for(j = 2; j < i; j++)
            {
                if(i%j==0) break;
                else if(j+1==i)
                {
                    total+=i;
                    if(min>i) min = i;
                }
            }
        }
        if(total==0) System.out.print("-1");
        else 
        {
            System.out.format("%d\n", total);
            System.out.format("%d", min);
        }
    }
}