// obj02.js


let scores = [10, 30, 50, 40];

//for 반복문

for(let i=0; i<scores.length; i++){
    console.log(scores[i]);
}

//for in
for (let i in scores){
    console.log(i + ' ' + scores[i]);  //각각 인덱스 안에 값을 나타냄
}

//for of
//item을 나타내거나 value이거나 단수형태로 score
for(let item of scores){  //for(String item : stringArr) 자바에서 향상된 for문
    console.log(item);
}

//forEach
//내부에 있는 값들을 체크를 할때 사용
//각각 넣어서 실행할수 있게 하겠다
//매개변수를 함수를 넘긴다
//반복문을 이걸로 대체해서 사용하는 경우가 많다

//[10, 30, 50, 40]
                //  (item, index)=> { }
scores.forEach( (item, index)=>{
    console.log(item + ' ' + index) ;
});























