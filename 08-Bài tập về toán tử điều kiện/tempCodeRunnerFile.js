let c = prompt("Hãy nhập tuổi của bạn");
c = Number.parseInt(b);

if (c < 10) {
	console.log("Bạn không nằm trong dộ tuổi quy định");
} else if (c >= 10 && c <= 20) {
	console.log("Bạn nằm trong dộ tuổi từ 10 đến 20");
} else if (c > 20) {
    console.log("Bạn đã vượt quá độ tuỏi quy định")
}