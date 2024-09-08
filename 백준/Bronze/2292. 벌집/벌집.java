import java.util.Scanner;
public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt(); int a = 1, i;
        for(i = 1; ; i++)
        {
            a=a+i*6;
            if(n<=a) break;
        }
        if(n==1) System.out.format("%d", 1);
        else
            System.out.format("%d", i+1);
    }
}