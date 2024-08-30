public class Main
{
    public static void main(String args[])
    {
        int[] arr = new int[10001];
        for(int i = 1; i < 10001; i++) {
            int a = i/1000;
            int b = (i-a*1000)/100;
            int c = (i-a*1000-b*100)/10;
            int d = i-a*1000-b*100-c*10;
            int sum = i+a+b+c+d;
            if(sum < 10001) arr[sum] = sum;
        }
        for(int k = 1; k < 10001; k++) {
            if(arr[k]==0) System.out.println(k);
        }
    }
}
