import java.io.*;

public class Main
{
    public static void main(String args[]) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str = br.readLine();
        String[] arr = str.toUpperCase().split("");
        int arrLen = arr.length;
        
        int[] alphabet = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
		
		for(int i = 0; i < arrLen; i++) {
		    for(int j = 0; j < 27; j++) {
		        if((int)arr[i].charAt(0) == j+64) {
		            alphabet[j]++;
		            break;
		        }
		    }
		}
		
		int many = 0, manyNum = 0;
        boolean multiple = false;
		for(int k = 0; k < 27; k++){
            if(manyNum < alphabet[k]){
                multiple = false;
                many = k;
                manyNum = alphabet[k];
            }
            else if(manyNum == alphabet[k]) multiple = true;
		}
		System.out.format("%s", (multiple == true) ? "?" : (char)(many+64));
    }
}