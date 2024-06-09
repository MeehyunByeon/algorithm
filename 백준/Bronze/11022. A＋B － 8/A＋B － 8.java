import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int T = s.nextInt();
        int Tc = 1;
        for(int i = 1; i <= T; i++, Tc++)
        {
            int a = s.nextInt();
            int b = s.nextInt();
            System.out.format("Case #%d: %d + %d = %d\n", Tc, a, b, a+b);
        }
    }
}