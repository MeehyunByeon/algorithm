import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int a, b;
        do
        {
            a = s.nextInt();
            b = s.nextInt();
            if(a==0 && b==0) break;
            System.out.println(a+b);
        }while(a!=0&&b!=0);
    }
}