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
        for(int i = 1; i < n+1; i++) {
            arr[i] = Integer.parseInt(str.nextToken());
        }
        
        int ioc, newItem = 0, stop = 0, cnt=0, a=0;
        for(int i = 2; i < n+1; i++) {
            if(stop == 1) break;
            ioc = i-1;
            newItem = arr[i];
            
            while(1 <= ioc && newItem < arr[ioc]) {
                if(stop == 1) break;
                cnt++;
                if(cnt == k) {
                    a = arr[ioc];
                    stop = 1;
                    break;
                }
                arr[ioc+1] = arr[ioc];
                ioc--;
            }
            if(ioc+1 != i) {
                cnt++;
                if(cnt == k) {
                    a = newItem;
                    stop = 1;
                    break;
                }
                arr[ioc+1] = newItem;
            }
        }
        if(cnt < k) System.out.format("%d", -1);
        else System.out.format("%d", a);
    }
}
