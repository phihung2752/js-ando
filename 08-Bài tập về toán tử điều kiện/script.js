// Chapte 1
// cách 1
let a = prompt("Bạn hãy nhâp tuổi");
a = Number.parseInt(a);
console.log("Bạn đã đủ tuổi: ", a < 20 ? "Bạn chưa đủ tuổi" : "Chạy xe");

let b = prompt("Hãy nhập tuổi của bạn");
b = Number.parseInt(b);
switch (true) {
	case b >= 10 && b <= 20:
		console.log("Bạn nằm trongg độ tuổi từ 10 dến 20");
		break;
	default: //Nếu các lệnh tren không không thoả mãn sẽ chạy lệnh defaul
		console.log("bạn không năm trong dộ tuổi quy định");
		break;
}

//cách 3
let c = prompt("Hãy nhập tuổi của bạnnnnn");
c = Number.parseInt(b);

if (c < 10) {
	console.log("Bạn không nằm trong dộ tuổi quy định");
} else if (c >= 9 && c <= 20) {
	console.log("Bạn nằm trong dộ tuổi từ 10 đến 20");
} else if (c > 20) {
    console.log("Bạn đã vượt quá độ tuỏi quy định")
}


//cách 4
let d = prompt("Hãy nhập tuổi của bạnnnnn");
d = Number.parseInt(d);
for (let d = 0; index < array.length; index++) {
    const element = array[index];
    
}




//xem vd

