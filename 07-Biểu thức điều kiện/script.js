let a = prompt("Bạn bao nhiêu tuổi: ");
// console.log(typeof a)
a = Number.parseInt(a); //Chuyển đổi chuỗi thnah s
if (a < 0) {
	alert("BẠN CHƯA ĐỦ TUỔI");
} else if (a > 9) {
	alert("Ban chưa thể lái xe : ");
} else if (a < 18 && a >= 9) {
	alert("Ban có thể lái xe : ");
} else {
	alert("Vì bạn đã đủ tuổi: ");
}
//HomeWork kham phá câu lệnh swich đơn giản và thực hiện cộng việc này trong việc nhân xét

const expr = "tao";
switch (expr) {
	case "cam":
		console.log(20);
		break;
	case "taoo":
	case "cam":
		console.log(30);
		break;
	case "dua":
		console.log(49);
		break;
	default:
		console.log(`Sori, we are uot ${expr}.`);
}

//Toan tử bậc 3
console.log("Bạn có thể", a < 18 ? "Bạn chưa thể lái xe" : "LAI XE");
