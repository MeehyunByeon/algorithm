import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int N = s.nextInt();
        if(N==0) System.out.print("YONSEI");
        else if(N==1) System.out.print("Leading the Way to the Future");
    }
}