import java.util.Scanner;
public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int a = s.nextInt(); int b = s.nextInt(); int c = s.nextInt();
        if(a+b+c==180)
        {
            if(a==b || b==c || a==c) 
            {
                if(a==b && b==c && a==c) System.out.print("Equilateral");
                else System.out.print("Isosceles");
            }
            else System.out.print("Scalene");
        }
        else System.out.print("Error");
    }
}