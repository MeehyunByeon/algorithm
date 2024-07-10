import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int a, total = 0;
        for(int i = 0; i < 5; i++)
        {
            a = s.nextInt();
            if(a<40) a=40;
            total+=a;
        }
        System.out.print(total/5);
    }
}