import java.io.*;
import java.util.StringTokenizer;

public class Main
{
    public static int n, k, a, b, temp, cnt = 0, stop = 0;
    
    static void print(int a, int b) {
        if(a < b) System.out.format("%d %d", a, b);
        else System.out.format("%d %d", b, a);
    }
    
    static void quick_sort(int[] arr, int p, int r) {
        if(p < r) {
            int q = partition(arr, p, r);   // 분할
            quick_sort(arr, p, q-1);  // 왼쪽 부분 배열 정렬
            quick_sort(arr, q+1, r);  // 오른쪽 부분 배열 정렬
        }
    }
    
    static int partition(int[] arr, int p, int r) {
        int x = arr[r];  // 기준원소
        int i = p-1;    // i는 x보다 작거나 작은 원소들의 끝지점
        int j = p;
        for(; j < r; j++) {  // j는 아직 정해지지 않은 원소들의 시작 지점
            if(arr[j] <= x) {
                // i값 증가 후 A[i] <-> A[j] 교환
                cnt++;
                i++;
                if(cnt == k) {
                    
                    print(arr[i], arr[j]);
                    break;
                }
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        if(i+1 != r) {
            // i + 1과 r이 서로 다르면 A[i + 1]과 A[r]을 교환
            cnt++;
            if(cnt == k) print(arr[i+1], arr[r]);
            temp = arr[i+1];
            arr[i+1] = arr[r];
            arr[r] = temp;
        }
        return i + 1;
    }
    
    public static void main(String args[]) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer str = new StringTokenizer(br.readLine());
        
        // 첫째줄 입력받기 => 배열 A의 크기 N, 교환 횟수 K
        n = Integer.parseInt(str.nextToken());
        k = Integer.parseInt(str.nextToken());
        
        // 둘째줄 입력받기 => 서로 다른 배열 A의 원소
        int[] arr = new int[n+1];
        str = new StringTokenizer(br.readLine());
        for(int i = 1; i < n+1; i++) {
            arr[i] = Integer.parseInt(str.nextToken());
        }
        
        quick_sort(arr, 1, n);
        if(cnt < k) System.out.format("%d", -1);
        // else System.out.format("%d %d", a, b);
    }
}