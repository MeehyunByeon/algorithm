import java.io.*;
import java.util.StringTokenizer;

public class Main
{
    public static void main(String args[]) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        for(int i = 0; i < t; i++) {
            int k = Integer.parseInt(br.readLine());
            int n = Integer.parseInt(br.readLine());
            int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14};
            for(int j = 0; j < k; j++) {
                int result = 0;
                for(int l = 0; l < n; l++) {
                    result += arr[l];
                    arr[l] = result;
                }
                if(j == k-1) System.out.format("%d\n", result);
            }
        }
    }
}
