import java.util.Scanner;
public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int y = s.nextInt();
        if(y%4==0)
        {
            if(y%100!=0 || y%400==0) System.out.print("1");
            else System.out.print("0");
        }
        else System.out.print("0");
    }
}