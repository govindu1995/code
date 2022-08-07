
	function getMissing(a, n) {

		let total = Math.floor((n + 1) * (n + 2) / 2);
		for (let i = 0; i < n; i++)
			total -= a[i];
		return total;
	}



	let arr = [ 1,2,5,6,7,8,3 ];
	let n = arr.length;
	let missingNumber = getMissing(arr, n);
	console.log(missingNumber);
