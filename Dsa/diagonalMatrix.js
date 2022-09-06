function isDiagonal(arr, M, N) {
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        // Condition to check all elements apart from elements at the diagonal
        if (i !== j && arr[i][j] !== 0) {
          return false;
        }
      }
    }
    return true;
  }
  
  const arr = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];
  
  const output = isDiagonal(arr, arr.length, arr[0].length);
  console.log(output);