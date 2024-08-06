import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int T = s.nextInt();
        for(int i = T; i>0; i--)
            System.out.format("%d\n", i);
    }
}