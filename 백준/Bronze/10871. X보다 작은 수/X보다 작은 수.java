import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt(); int x = s.nextInt();
        int i; int[] arr=new int [10000];
        for(i = 0; i < n; i++)
            arr[i] = s.nextInt();
        for(i = 0; i < n; i++)
        {
            if(arr[i]<x) System.out.format("%d ", arr[i]);
        }
    }
}