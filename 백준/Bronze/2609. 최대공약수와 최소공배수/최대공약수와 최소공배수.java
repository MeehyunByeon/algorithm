import java.io.*;
import java.util.StringTokenizer;

public class Main
{
    public static void main(String args[]) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        int[] arr = new int[50];
        int arrIndex = 0;
        
        for(int i = 2; i < 100001 ; i++) {
            if(a%i==0 && b%i==0){
                arr[arrIndex] = i;
                arrIndex++;
            }
            if(i>=a && i>=b) break;
        }
        
        int gcd = (arrIndex == 0) ? 1 : arr[arrIndex-1];
        System.out.format("%d\n%d", gcd, (a*b)/gcd);
    }
}