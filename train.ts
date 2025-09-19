//  ******************************************************

// TASK ZK:

// Shunday function yozing, bu function har bir soniyada bir marotaba
// console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
// 5 soniyadan so'ng function o'z ishini to'xtatsin

function printNumbers() {
	let times = 1;
	const count: any = 5;
	const test = setInterval(() => {
		for (let i: any = 1; i <= 5; i++) {
			console.log(i);
		}

		console.log(`${times++} marta ishga tushdi`);

		if (times > 5) {
			clearInterval(test);
		}
	}, 1000);
}

// MASALAN: printNumbers();
printNumbers();
