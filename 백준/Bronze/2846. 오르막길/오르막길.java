import java.util.Scanner;
public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        int a, b, o1=0, o2=0;
        b = s.nextInt();
        for(int i = 1; i < n; i++)
        {
            a = s.nextInt();
            if(a>b)
            {
                o1=o1+a-b;
                if(o1>o2) o2=o1;
            }
            else o1=0;
            b=a;
        }
        System.out.format("%d", o2);
    }
}