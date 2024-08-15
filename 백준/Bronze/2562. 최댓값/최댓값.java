import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int[] arr = new int[10];
        int max=1, n=0;
        for(int i = 1; i < 10; i++)
        {
            arr[i] = s.nextInt();
            if(arr[i]>max) 
            {
                max=arr[i];
                n=i;
            }
        }
        System.out.format("%d\n", max);
        System.out.format("%d", n);
    }
}