//operator
//oper01.js

let x = 10;
let y = 10;
let z = '10';

console.log(x == y);  //true
console.log(x === y);  //true
console.log(x == z);  //true
console.log(x === z);  //false 타입이 다르니까
//!= !== 타입까지 다른가 비교


console.log( 1==1 && 2==2);
//A && B 둘다 참 -> 참
//A || B 둘다 거짓 -> 거짓

console.log( 1==1 && 10 );  //10
console.log( 1!=1 && 10 );  //false  앞에꺼 비교했는데 거짓이라 다음을 실행하지 않는다

console.log( 1!=1 || 20 );  //20 내가 거짓이라도 뒤에 있는것이 참이면 실행을 한다
console.log( 1==1 || 20 );  //true 내가 참이면 뒤에 조건이 다 거짓이어도 하나만 참이면 참이다
// if 문 대신 쓰는 것처럼 나타남


//조건 참 -> A 실행
let a = 10;
//조건 a == 10 이면 -> A 실행

if(a == 10) {
    console.log("A");
}

a == 10 && console.log("A");

let q = 10;
let w = '20';
let e = 30;

console.log(q+w);
console.log(q+e);
console.log(q+''+e);

console.log(q+String(e));
console.log(q+Number(w));

console.log(Number("123"));
console.log(Number("123.456"));










