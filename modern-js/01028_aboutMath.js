// 기본 연산자와 수학
// 1) 용어
//  : 피연산자(operand) -> 연산자가 연산을 수행하는 대상
//                       => +, -. *, /, %(나머지), **(거듭제곱)
//  : 단항 연산자(unary operand)
//  : 이상 연산자(binary operand)
//  : 연산자가 단항인지 이항인지를 결정하는 기준은 피연산자의 개수


// 2) 이항 연산자 '+'와 문자열 연결
//  : 덧셈 연산자 +가 문자열에 사용되면 문자열을 병합한다.
//  : 만약 피연산자 중 하나가 문자열이면 다른 하나도 문자열로 변환된다.
//  : 연산은 왼쪽에서 오른쪽으로 순차적으로 진행된다. 단 사칙 연산을 바탕으로 순서가 진행 된다.
//  : 다른 숫자형은 오직 숫자만을 피연산자로 다룬다. 고로 -나 /가 숫자형과 문자형을 대상으로 사용되는 경우 숫자형으로 변환된다.
//  : IF, 불린 값이 이항 연산자 '+'를 통해 연산이 되면 true는 1로 False는 0으로 간주하고 값이 계산된다.
console.log(typeof('1' + 2));
console.log(2 + 2 + '1');
console.log(2 + 2 / '1');
console.log(4 + 4 / '2');


// 3) 단항 연산자 '+'와 숫자형으로의 변환
//  : 피연산자가 숫자가 아닌 경우, '+'가 단항 연산자로 사용되었을때 피연산자가 숫자형으로 변환이 일어난다.


// 4) 연산자 우선순위
//  : 하나의 표현식에 둘 이상의 연산자가 있는 경우, 실행 순서는 연산자의 우선순위에 의해 결정된다.
//  : 우선순위가 같으면 왼쪽에서 오른쪽으로 연산이 수행된다.
//  : 단항 연산자의 우선순위가 이상 연산자의 우선순위보다 높다.
let mathApples = "2";
let mathOranges = "3";
console.log( +mathApples + +mathOranges );


// 5) 할당 연산자
//  : 할당 연산자(=)는 우선순위가 매우 낮다.
//  : 할당 연산자 체이닝
//      -> 할당 연산자를 여러개 연결하여 사용한다.
//      -> 평가는 우측부터 진행되며 좌측으로 순차적으로 할당된다.
//      -> 가급적이면 연산자 체이닝을 사용하지는 말자
let mathA, mathB, mathC;
mathA = mathB = mathC = 2 + 2;
console.log(mathA);
console.log(mathB);
console.log(mathC);


// 6) 복합 할당 연산자
//  : 변수에 연산자를 적용하고 그 결과를 같은 변수에 저장
let mathN = 2;
mathN *= 2;
console.log(mathN);
mathN += 5;
console.log(mathN);


// 7) 증가 감소 연산자
//  : 증가 연산자 (++), 감소 연산자(--);
//  : Number가 변수에 할당된 경우 해당 변수에만 사용할 수 있다. 직접적으로 숫자에는 사용할 수 없다.
//  : 전위형(Prefix) -> 증가/감소 후 새로운 값을 반환한다.
//  : 후위형(Postfix) -> 증가/감소 전의 기존 값을 반환한다.
//  : 증가 감소 연산자의 우선순위는 대부분의 산술 연산자보다 높기 때문에 평가가 먼저 이루어진다.


// 8) 비트 연산자
//  : 인수를 32비트 정수로 변환하여 이진 연산을 수행한다.
//  : 주로 암호를 다룰때 사용된다.
//  : 종류
//  : AND(&), OR(|), XOR(^), NOT(~), LEFT SHIFT(<<), RIGHT SHIFT(>>), ZERO_FILL RIGHT SHIFT(>>>)


// 9) 쉼표 연산자
//  : 여러 표현식을 코드 한 줄에서 평가할 수 있게 한다.
//  : 표현식이 각각 모두 평가가 되지만 마지막 표현식의 평가 결과만 반환되는 점에서 유의한다
//  : 쉼표의 우선순위는 할당 연산자보다 낮다.
let mathD = (1 + 2, 3 + 4);
console.log(mathD);


// 10) 형변환 예제
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(true + true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(7 / 0);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log("\t \n" - 2);


