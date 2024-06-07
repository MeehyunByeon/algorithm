import java.util.Scanner;
public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int n=0, i;
        int p = s.nextInt();
        for(i = 1; i <= p; i++)
        {
            int a = s.nextInt();
            if(a!=i) n++;
        }
        System.out.format("%d", n);
    }
}