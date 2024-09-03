import java.util.Scanner;
public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        long go = s.nextInt(); long ga = s.nextInt(); long pan = s.nextInt();
        if(pan>ga) 
        {
            System.out.format("%d", go/(pan-ga)+1);
        }
        else System.out.print("-1");
    }
}