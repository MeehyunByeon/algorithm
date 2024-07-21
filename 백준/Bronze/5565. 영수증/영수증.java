import java.util.Scanner;
public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int price = s.nextInt();
        for(int i = 0; i < 9; i++)
        {
            int a = s.nextInt();
            price-=a;
        }
        System.out.format("%d", price);
    }
}