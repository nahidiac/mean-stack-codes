let value = [2, "abc", 5.5, true];
value[0] = 10;


let x = 10;
let y = x;

x = 15;
y = 560;

let value2 = [10, 20, "Hello"];

console.log(value);
console.log(value.length);

for (let i = 0; i < value.length; i++) {
    let item = value[i];
    console.log(item, typeof (item));
}

//value.push(10);
//value.push(20);
//value.push("Hello");

value.push(value2);

value2.pop();

console.log(value);

console.log(typeof value);
