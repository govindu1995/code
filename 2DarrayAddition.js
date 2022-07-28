const arr = [
    [3, 3, 4],
    [1, 1, 1],
    [2, 2, 7],
  ];
  
  function columnSum(arr, N) {
    let rowStartIndex = 0;
    let rowEndIndex = arr.length - 1;
    let individualColumnSum = 0;
    const allColumnSum = [];
  
    for (let col = 0; col < N; col++) {
      individualColumnSum = 0;
      for (let i = rowStartIndex; i <= rowEndIndex; i++) {
        individualColumnSum += arr[i][col];
      }
      allColumnSum.push(individualColumnSum);
    }
    return allColumnSum;
  }
  
  const output = columnSum(arr, 3);
  console.log(output);