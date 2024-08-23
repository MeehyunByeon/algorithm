import java.util.Scanner;
public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        int score=0, p=0;
        for(int i = 1; i <= n; i++)
        {
            int a = s.nextInt();
            if(a==1)
            {
                p++;
                score += a*p;
            }
            else p = 0;
        }
        System.out.format("%d", score);
    }
}