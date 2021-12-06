// 자료형
// : 자바스크립트의 변수는 자료형에 관계없이 모든 데이일 수 있다.

// 1) Int
//  : 숫자형은 정수 및 부동소수점 숫자(floating point number)을 나타낸다
//  : 특수 숫자 값(Special numeric value) -> Infinity, -Infinity, NaN(Not a Number)


// 2) BigInt
//  : 범위 -> (2^53 - 1) 보다 크거나 -(2^53 -1) 보다 작은 정수
//  : 암호와 관련된 작업과 같이 아주 큰 숫자가 필요거나 높은 정밀도가 요구되는 작업일 때 사용한다.
//  : 정수 리터럴 끝에 n을 붙이면 만들 수 있다.
const bigInt = 123456789012345678901234567890123456789012345678901234567890n;


// 3) String
//  : 따옴표에는 세 종류가 있다 -> 큰따옴표(""), 작은따옴표(''), 역따옴표(``)
//  : 기본적으로 큰따옴표와 작은따옴표는 차이를 두지 않는다.
//  : 역따옴표로 변수나 표현식을 감싼 후 ${...}안에 넣어주면 변수나 표현식을 문자열 중간에 쉽게 넣을 수 있다.
let backtipName = 'Taemin';
alert(`hello ${backtipName}`);
alert(`The result is ${1 + 2}`);


// 4) boolean
//  : true, false
//  : 불린 값은 비교 결과를 저장할 때도 사용한다
let nameFieldChecked = true;
let ageFieldChecked = false;
let isGreater = 4 > 1;
alert( isGreater );


// 5) null
//  : 자바스크립트에서는 존재하지 않는 값(nothing), 비어있는 값(empty)을 나타낼때 사용한다.
//  : let age = null; age를 알 수 없거나 그 값이 비어있음을 의미한다.


// 6) undefined
//  : 값이 할당되지 않은 상태를 나타낼때 사용한다.
//  : 변수를 선언했지만 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당된다
//  : 개발자가 변수에 명시적으로 할당하는 것도 가능하다.
let undefinedAge;
undefinedAge = undefined;


// 7) Typeof 연산자
//  : 인수의 자료형을 반환한다.
//  : 연산자 -> typeof x | 함수 -> typeof(x)
//  : 특이사항
//      -> null의 경우 object로 반환한다.
//      -> alert와 같은 함수는 function으로 반환한다.