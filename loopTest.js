const totalSize = 1000000;
const myArray = [];

for (let i = 0; i < 20000000; i++) {
  myArray.push(i);
}

let oldTime = Date.now();

let result1 = 0;
for (let i = 0; i < myArray.length; i++) {
  result1 += Number(myArray[i]);
}

let newTime = Date.now();

console.log(oldTime, newTime, newTime - oldTime, result1);
console.log("================================================= 기본포문");

oldTime = Date.now();
result1 = 0;
for (let i in myArray) {
  result1 += Number(myArray[i]);
}
newTime = Date.now();

console.log(oldTime, newTime, newTime - oldTime, result1);
console.log("================================================= 포문 i in");

oldTime = Date.now();
result1 = 0;
for (let i of myArray) {
  result1 += Number(i);
}
newTime = Date.now();

console.log(oldTime, newTime, newTime - oldTime, result1);
console.log("================================================= 포문 i of");

oldTime = Date.now();
result1 = 0;
myArray.forEach((idx) => {
  result1 += Number(idx);
});
newTime = Date.now();

console.log(oldTime, newTime, newTime - oldTime, result1);
console.log("================================================= forEach문");

oldTime = Date.now();
result1 = 0;
idx = 0;
while (idx < myArray.length) {
  result1 += Number(myArray[idx]);
  idx++;
}
newTime = Date.now();

console.log(oldTime, newTime, newTime - oldTime, result1);
console.log("================================================= while문");
