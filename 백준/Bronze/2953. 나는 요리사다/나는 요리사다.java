import java.util.Scanner;
public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int top=0, tops=0, score;
        for(int i = 1; i <= 5; i++)
        {
            score = 0;
            for(int j = 1; j <= 4; j++)
            {
                int a = s.nextInt();
                score+=a;
            }
            if(score>tops) 
            {    
                tops=score; 
                top=i;
            }
        }
        System.out.format("%d\n", top);
        System.out.format("%d\n", tops);
    }
}