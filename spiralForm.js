const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  function spiralMatrix(arr, M, N) {
    let i; // Iterator variable
    let k = 0; //  row start index
    let l = 0; //  column start index
    let last_row = M - 1; // row end index
    let last_col = N - 1; // column end index
    let outputStr = "";
  
    while (k <= last_row && l <= last_col) {
      /* Print first row  */
      for (i = l; i <= last_row; i++) {
        outputStr += arr[k][i] + " ";
      }
      k++;
  
      /* Print last column */
      for (i = k; i <= last_row; i++) {
        outputStr += arr[i][last_col] + " ";
      }
      last_col--;
  
      /*Print last row */
      if (k <= last_row) {
        for (i = last_col; i >= 0; i--) {
          outputStr += arr[last_row][i] + " ";
        }
        last_row--;
      }
  
      /* Print first column */
      if (l <= last_col) {
        for (i = last_row; i >= k; i--) {
          outputStr += arr[i][l] + " ";
        }
        l++;
      }
    }
  
    return outputStr;
  }
  
  const output = spiralMatrix(arr, arr.length, arr[0].length);
  console.log(output);