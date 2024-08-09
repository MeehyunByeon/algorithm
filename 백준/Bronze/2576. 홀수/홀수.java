import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int a, mini=99, t=0;
        for(int i = 0; i < 7; i++)
        {
            a = s.nextInt();
            if(a%2==1)
            {
                t+=a;
                if(mini>a) mini=a;
            }
        }
        if(t==0)
            System.out.println("-1");
        else 
        {   
            System.out.format("%d\n", t);
            System.out.format("%d", mini);
        }
    }
}