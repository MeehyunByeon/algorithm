import java.util.Scanner;
public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int a = s.nextInt(); int b = s.nextInt();
        int n = 0, cnt=0;
        for(int i = 1; i <= b; i++)
        {
            for(int j = 1; j <= i; j++)
            {    
                cnt++;
                if(cnt>=a && cnt<=b) n+=i;
            }
        }
        System.out.format("%d", n);
    }
}