import java.util.Scanner;
public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        for(int i = 0; ; i++)
        {
            int a = s.nextInt();
            int b = s.nextInt();
            if(a==0&&b==0) break;
            if(b%a==0) System.out.println("factor");
            else if(a%b==0) System.out.println("multiple");
            else System.out.println("neither");
        }
    }
}