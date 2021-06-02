let value = 2 ** 4;

console.log(value);

if (value > 10) {
    console.log('Value is greater then 10')
} else {
    console.log('chill');
}


switch (value) {
    case 16:
        console.log("value is 16");
        break;
    default:
        console.log("chill");
}

let result = value > 10 ? "value is greater then 10" : "hi";
console.log(result);
