import java.io.*;
import java.util.StringTokenizer;

public class Main
{
    public static void main(String args[]) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer str = new StringTokenizer(br.readLine());
        
        // 첫째줄 입력받기 => 배열 A의 크기 N, 교환 횟수 K
        int n = Integer.parseInt(str.nextToken());
        int k = Integer.parseInt(str.nextToken());
        
        // 둘째줄 입력받기 => 서로 다른 배열 A의 원소
        int[] arr = new int[n+1];
        str = new StringTokenizer(br.readLine());
        for(int i = 0; i < n; i++) {
            arr[i] = Integer.parseInt(str.nextToken());
        }
        
        int max, temp, cnt=0, a=0, b=0;
        for(int i = n-1; i > -1; i--) {
            max = i;
            for(int j = i-1; j > -1; j--) {
                if(arr[max] < arr[j]) {
                    max = j;
                }
            }
            if(arr[max] != arr[i]) cnt++;
            if(cnt == k) {
                a = arr[i];
                b = arr[max];
                break;
            }
            temp = arr[i];
            arr[i] = arr[max];
            arr[max] = temp;
        }
        if(cnt < k) System.out.format("%d", -1);
        else System.out.format("%d %d", a, b);
    }
}
