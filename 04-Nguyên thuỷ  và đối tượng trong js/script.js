// Có 7 kiểu dữ liệu nguyên thuỷ
//nn ss bb u
let a = null;
let b = 123; //Number
let c = Symbol("I am a nike Symbol");
let d = "Phi Hưng"; //String
let e = true;
let f = BigInt("123") + BigInt("4");
let j = undefined;
console.log(a, b, c, d, f, e, j);
console.log(typeof a, b, c, d, f, e, j);
// Objects in js kiểu dữ lieuy không nguyên thuỷ
const item = {
	"PhiHung": true,
	"Khang": false,
	"Dai": "23",
	"Khanh": undefined,
};
console.log(item["PhiHung"]);

