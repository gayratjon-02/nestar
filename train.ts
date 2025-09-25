//  ******************************************************

// TASK ZN:

// Shunday function yozing, uni array va number parametri bo'lsin.
// Function'ning vazifasi ikkinchi parametr'da berilgan raqam, birinchi
// array parametr'ning indeksi bo'yicha hisoblanib, shu indeksgacha bo'lgan
// raqamlarni indeksdan tashqarida bo'lgan raqamlar bilan o'rnini
// almashtirib qaytarsin.

function rotateArray(arrNumbers: number[], num: number) {
	return arrNumbers.slice(num + 1).concat(arrNumbers.slice(0, num + 1));
}

console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));

// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3); return [5, 6, 1, 2, 3, 4];

//  ******************************************************

// TASK ZM:

// Shunday function yozing, va bu function parametr
// sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
// raqamlarni orqasiga o'girib qaytarsin

// MASALAN: reverseInteger(123456789); return 987654321;

// function reverseInteger(num: number): number {
// 	const isNegative = num < 0;
// 	const reversedNum = Number(Math.abs(num).toString().split('').reverse().join(''));
// 	return isNegative ? -reversedNum : reversedNum;
// }

// console.log(reverseInteger(123456789));
// console.log(reverseInteger(-123456789));

// Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
// o'girib (reverse) qilib qaytarmoqda.

//  ******************************************************

// TASK ZK:

// Shunday function yozing, bu function har bir soniyada bir marotaba
// console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
// 5 soniyadan so'ng function o'z ishini to'xtatsin

// function printNumbers() {
// 	let times = 1;
// 	const count: any = 5;
// 	const test = setInterval(() => {
// 		for (let i: any = 1; i <= 5; i++) {
// 			console.log(i);
// 		}

// 		console.log(`${times++} marta ishga tushdi`);

// 		if (times > 5) {
// 			clearInterval(test);
// 		}
// 	}, 1000);
// }

// // MASALAN: printNumbers();
// printNumbers();
