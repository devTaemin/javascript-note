// 비교 연산자
// 1) 불린형 반환
//  : 비교 연산자의 바노한 값은 불린형이다.
//  : 반환된 불린 값은 여타 값처럼 변수에 할당할 수 있다.
let comparisonResult = 5 > 4;
console.log(comparisonResult);


// 2) 문자열 비교
//  : 사전편집(lexicographical) 순서로 문자열을 하나하나 비교한다. 실제로는 유니코드 순서이다.
//  : 비교가 종료되고 문자열의 길이가 같으면 두 문자열은 같다고 결론을 내린다. 만약 길이가 다르면 길이가 더 긴게 큰 것
console.log('A' < 'a');
console.log('Z' > 'A');
console.log('Glow' > 'Glee');
console.log('Bee' > 'Be');


// 3) 다른 형을 가진 값 간의 비교
//  : 비교하려는 값의 자료형이 다르면 자바스크립트는 이 값들을 숫자형으로 바꾼다.
console.log( '2' > 1 );
console.log( '01' == 1 );
console.log( true == 1 );
console.log( false == 0 );


// 4) 동등 연산자와 일치 연산자
//  : 동등 연산자(==), 일치 연산자(===), 부등 연산자(!=), 불일치 연산자(!==)
//  : 동등 연산자는 다른 피연산자와 비교할 때 피연산자를 숫자형으로 바꾸기 때문에 0, false, ""를 구별하지 못한다.
//  : 이때 일치 연산자를 사용하면 형 변환 없이 자료형의 동등 여부까지 검사하며 값을 비교할 수 있다. 
//  : null과 undefined를 일치 연산자로 비교하면 false, null과 undefined를 동등 연산자로 비교하면 true
//  : 산술 연산자나 기타 비교 연산자로 null과 undefined를 비교하면 숫자형으로 전환되는데, null은 0 / undefined는 NaN가 된다.
//  : 동등 연산자로 undefined나 null을 비교할때는 형변환이 되지 않는다.
//  : undefined는 다른 값과 비교해서는 안된다. 오직 동등 연산자로 null과 비교할때만 true를 반환한다.


// 5) 예제
console.log(5 > 4);
console.log("apple" > "pineapple");
console.log("2" > "12");
console.log(undefined == null);
console.log(undefined === null);
console.log(null == "\n0\n");
console.log(null === +"\n0\n");
