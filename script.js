function fibonacci(num) {
	if(num == 1) return 0;
	if(num == 2) return 1;
	
 let num1 = 0;
	let num2 = 1 ;
	let i=0;
	let sum =0;
	for(let i=2;i<=num;i++){
		sum = num1+num2;
		num1 = num2;
		num2=sum;
		
	}
	return num2;
}

module.exports = fibonacci;
