import java.io.*;

public class Main
{
    public static void main(String args[]) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int n = Integer.parseInt(br.readLine());
        int[] arr = new int[10001];
        for(int i = 0; i < n; i++) {
            int a = Integer.parseInt(br.readLine());
            arr[a] += 1;
        }
        for(int j = 1; j < 10001; j++) {
            if(arr[j] > 0) {
                for(int k = 1; k < arr[j]+1; k++) bw.write(j+"\n");
            }
        }
        bw.flush();
    }
}