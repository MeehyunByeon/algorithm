import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int T = s.nextInt();
        for(int i = 0; i < T; i++)
        {
            String[] numbers = s.next().split(",");
            int a = Integer.parseInt(numbers[0]);
            int b = Integer.parseInt(numbers[1]);
            System.out.println(a+b);
        }
    }
}