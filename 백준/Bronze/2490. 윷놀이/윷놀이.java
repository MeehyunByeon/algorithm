import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int i, j, one;
        int[] arr=new int [12];
        for(i = 0; i < 3; i++)
        {
            one=0;
            for(j = 0; j < 4; j++)
            {
                arr[i] = s.nextInt();
                if(arr[i]==1) one++;
            }
            switch(one)
            {
                case 0: System.out.println("D"); break;
                case 1: System.out.println("C"); break;
                case 2: System.out.println("B"); break;
                case 3: System.out.println("A"); break;
                case 4: System.out.println("E"); break;
            }
        }
    }
}