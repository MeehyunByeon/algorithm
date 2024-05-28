import java.util.Scanner;
public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt(); int car=0;
        for(int i = 0; i < 5; i++)
        {
            int a = s.nextInt();
            if(a==n) car++;
        }
        System.out.format("%d", car);
    }
}