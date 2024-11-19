//1.
//다음의 출력 결과 예상하기

let arr1 = [10, '20', 30];
let arr2 = [10, '20', 30];
let arr3 = [10, 20, 30];
let arr4 = ['10', '20', '30'];

const compareArr = (arr1, arr2) => {
    for(let i=0; i<arr1.length; i++){
        console.log(arr1[i] == arr2[i]);
    }
}

console.log('비교 1');
compareArr(arr1, arr2);
//arr1과 arr2는 값과 타입이 모두 같음

console.log('비교 2');
compareArr(arr3, arr4); 
//arr3과 arr4는 숫자와 문자열을 비교
//숫자와 문자열은 동등 연산(==)에서 값이 같으면 true

console.log('비교 3');
compareArr(arr2, arr4);
//arr2와 arr4는 일부 요소 타입만 다름
//첫 번째 요소 10과 '10'은 동등 연산에서 true
//나머지 요소도 문자열끼리 비교하므로 true

/*
2.
const personInfo = {
name:"홍길동",
age:25,
phone:"010-1234-5678",
engName:"John Smith",
nickname:" 복습마왕 "
}

console.log('변경 전');
console.log(personInfo);

코딩부분

console.log('변경 후');
console.log(personInfo);
*/

const personInfo = {
    name: "홍길동",
    age: 25,
    phone: "010-1234-5678",
    engName: "John Smith",
    nickname: " 복습마왕 "
};

console.log('변경 전');
console.log(personInfo);

// 코딩 부분: 데이터 수정 및 추가
personInfo.engName = personInfo.engName.toUpperCase(); // 영어 이름을 대문자로 변경

// 전화번호 나누기
// phone 속성을 배열로 변경
personInfo.phone = personInfo.phone.split("-"); // "-"를 기준으로 배열로 분리
personInfo.nickname = personInfo.nickname.trim(); // 공백제거

console.log('변경 후');
console.log(personInfo);