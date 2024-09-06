import java.io.*;
import java.util.StringTokenizer;

public class Main
{
    public static void main(String args[]) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] arr = new int[9];
        int[] real = new int[7];
        int no1 = 0, no2 = 0;
        int total = 0;
        
        for(int i = 0; i < 9; i++) {
            int a = Integer.parseInt(br.readLine());
            arr[i] = a;
            total += a;
        }
        
        int max = 0, arrIndex = 0, temp = 0;
        for(int i = 0; i < 9; i++) {
            if(arr[i] > max) {
                max = arr[i];
                arr[arrIndex] = arr[i];
            }
            else {
                for(int j = 0; j < arrIndex; j++) {
                    if(arr[i] < arr[j]) {
                        for(int k = j; k < arrIndex; k++) {
                            temp = arr[k];
                            arr[k] = arr[i];
                            arr[i] = temp;
                            if(k == arrIndex-1) arr[k+1] = temp;
                        }
                    }
                }
            }
            arrIndex++;
        }
        
        for(int j = 0; j < 9; j++) {
            total -= arr[j];
            for(int k = 0; k < 9; k++){
                if(k != j) {
                    total -= arr[k];
                    if(total == 100) {
                        no1 = j;
                        no2 = k;
                        break;
                    }
                    total += arr[k];
                }
            }
            if(total == 100) break;
            total += arr[j];
        }
        
        for(int l = 0; l < 9; l++) {
            if(l == no1 || l == no2) continue;
            else System.out.println(arr[l]);
        }
    }
}
