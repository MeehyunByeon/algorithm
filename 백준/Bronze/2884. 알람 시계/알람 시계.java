import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int a = s.nextInt();
        int b = s.nextInt();
        int i;
        if(b-45<0)
        {
            for(i = 0; b!=0; i++) b--;
            a--;
            b=60-(45-i);
            if(a==-1) System.out.format("%d %d", 23, b);
            else System.out.format("%d %d", a, b);
        }
        else if(b-45==0) System.out.format("%d %d", a, 0);
        else System.out.format("%d %d", a,b-45);
    }
}