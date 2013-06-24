var counter = 0;
var current = 4;
var numOfPrimes = 100;
var primes = [2, 3]
var f = false;
while (counter < numOfPrimes){
	for (var i = 2; i <= Math.floor(Math.sqrt(current)); i++){
		if (current % i == 0) {
			f = true;
			break;
		}			
	}
	if (!f){
		primes.push(current);
		counter += 1;
	}
	f = false;
	current += 1;
}
var fs = require('fs');
var outfile = "primes.txt";
fs.writeFileSync(outfile, primes);  
