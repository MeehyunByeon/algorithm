import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int people, a, z=0, o=0;
        people = s. nextInt();
        for(int i = 0; i < people; i++)
        {
            a = s.nextInt();
            if(a==0) z++;
            else if(a==1) o++;
        }
        if(z>o) System.out.print("Junhee is not cute!");
        if(o>z) System.out.print("Junhee is cute!");
    }
}