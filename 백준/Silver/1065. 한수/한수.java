import java.util.Scanner;
public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt(); int i, h=0, a, b ,c;
        if(n<100) h = n;
        else if(n>=100)
        {
            h+=99;
            for(i = 100; i <= n; i++)
            {   
                if(i==1000) break;
                a = i/100; b = (i/10)%10; c = i%10;
                if(a-b==b-c) h++;
            }
        }
        System.out.format("%d", h);
    }
}