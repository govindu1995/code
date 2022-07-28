function uniqueElements(arr, M, N) {
    let max = 0;
    let uniqueElements = [];
  
    /* Find the max element of the matrix. That will be the size of the count array */
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        max = Math.max(max, arr[i][j]);
      }
    }
    // max = 26
  
    /* Create an array of size max+1 and fill that array with zeros */
    const countArray = Array(max + 1).fill(0);
  
    // [0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,.. 27elements]
  
    /* Iterate over the matrix and increment the value of the countArray at index === element */
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        countArray[arr[i][j]] = countArray[arr[i][j]] + 1;
      }
    }
  
    /* Loop over the count array and check if the value if 1 or not */
    for (let i = 0; i <= max; i++) {
      if (countArray[i] === 1) {
        // Unique element frequency
        uniqueElements.push(i);
      }
    }
    return uniqueElements;
  }
  
  const arr = [
    [2, 2, 15, 16],
    [7, 18, 20, 22],
    [8, 20, 23, 24],
    [10, 26, 26, 10],
  ];
  
  const output = uniqueElements(arr, arr.length, arr[0].length);
  console.log(output);