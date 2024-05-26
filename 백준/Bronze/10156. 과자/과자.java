import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int K = s.nextInt();
        int N = s.nextInt();
        int M = s.nextInt();
        int PM = K*N-M;
        if(PM<0) PM=0;
        System.out.print(PM);
    }
}