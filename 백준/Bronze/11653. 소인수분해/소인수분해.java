import java.io.*;
import java.util.StringTokenizer;

public class Main
{
    public static void main(String args[]) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int a = Integer.parseInt(br.readLine());
        int[] arr = new int[100];
        int arrIndex = 0;
        
        for(int i = 2; i < 10000000 ; i++) {
            if(a%i==0){
                while (a % i == 0) {
                    arr[arrIndex] = i;
                    a /= i;
                    arrIndex++;
                }
            }
            if(i>=a) break;
        }
        for(int j = 0; j < arrIndex; j++) System.out.println(arr[j]);
    }
}