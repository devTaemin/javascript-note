// 형변환
//  : 함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환된다.
//  : 전달받은 값을 의도를 가지고 원하는 타입으로 변환해 주는 경우도 형 변환이라고 할 수 있다.


// 1) 문자형으로 변환
//  : 예시
//      -> alert 메서드는 매개변수로 문자형을 받기 때문에 alert(value)에서 value는 문자형이어야 한다.
//      -> 문자형이 아닐 경우 자동으로 변환이 이루어진다.
let typecastValue = true;
alert(typeof typecastValue);
typecastValue = String(typecastValue);
alert(typeof typecastValue);


// 2) 숫자형으로 변환
//  : 수학과 관련된 함수와 표현식에서 자동으로 일어난다.
//  : 예시
//      -> 나누기 연산을 문자열에 사용하면 자동으로 문자열이 숫자형으로 자동변환이 된다.
//  : 만약 숫자형 값을 이용하려고 할 때, 문자 기반 form을 이용한다면 명시적인 형변환이 필수이다.
//  : 숫자형 변환 규칙
//      -> undefined => NaN
//      -> null => 0
//      -> true and false => 1, 0
//      -> string
//          * 문자열의 처음과 끝 공백이 제거된다.
//          * 만약 공백 제거 후 남아있는 문자열이 없다면 0, 그렇지 않으면 문자열에 남아있는 숫자를 읽고 변환한다.
//          * 만약 변환이 실패한 경우 NaN가 된다.
let typecastStr = '123';
alert(typeof typecastStr);
let typecastNum = Number(typecastStr);
alert(typeof typecastNum);


// 3) 불린형으로 변환
//  : 논리 연산을 수행할 경우 발생한다.
//  : 불린형 변환 규칙
//      -> 0, 빈문자열, null, undefined, NaN과 같이 직관적으로 비어있는 값: false
//      -> 나머지: true
//      -> 주의사항 '0'은 문자열 0을 표현한 것이므로 true
alert(Boolean(1));
alert(Boolean(0));
alert(Boolean('0'));
alert(Boolean(''));
alert(Boolean(undefined));