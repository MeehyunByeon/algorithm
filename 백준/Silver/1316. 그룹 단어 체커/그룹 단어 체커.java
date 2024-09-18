import java.util.Scanner;

public class Main
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        int result = n;
        for(int i = 0; i < n; i++)
        {
            String voca = s.next();
            String[] arr1 = voca.split("");
            boolean check1 = false;
            boolean stop = false;
            for(int j = 0; j < arr1.length-1 ; j++)
            {
                if(!arr1[j].equals(arr1[j+1])) 
                {
                    String target = arr1[j];
                    for(int k = j+2; k < arr1.length; k++){
                        if(stop == true) break;
                        if(target.equals(arr1[k])) {
                            result -= 1;
                            stop = true;
                        }
                        
                    }
                }
            }
        }
        System.out.format("%d", result);
    }
}