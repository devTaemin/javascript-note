// 객체를 원시형으로 반환하기
//  : 객체끼리 산술 연산을 하는 경우 자동 형변환이 된다.
//  : 객체는 원시값으로 변환되고, 그 후 의도한 연산이 수행된다.
//      -> 객체는 논리 평가 시 true를 반환한다.
//      -> 수학 연산이 발생할 경우 숫자형으로의 반환이 이루어진다.
//      -> 문자형으로의 반환은 대게 출력하는 경우 발생한다.


// 1) toPrimitive
//  : 특수 객체 메서드를 사용하면 숫자형이나 문자형으로의 형 변환을 원하는 대로 조절할 수 있다.
//  : 객체의 형 변환은 세 종류로 구분되는데 hint(목표로 하는 자료형)에 따라 불리는 값이 달라진다.
//  : Symbol.toPrimitive를 이용하여 메서드 하나로 모든 종류의 형 변환을 다룰 수 있다.
//      -> string => 객체를 출력하거나 프로퍼티 키로 사용하는 경우
//      -> number => 수학 연산 적용
//      -> default
//          => 연산자가 기대하는 자료형이 확실치 않을 경우
//          => 이항 덧셈 연산자(+), 동등 연산자(==)
//          => 단, 크고 작음(<, >)은 hint를 number로 고정한다.
let user = {
    name: "Ryu",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
}

console.log(user);
console.log(+user);
console.log(user + 500);


// 2) toString, valueOf
//  : toString과 valueOf는 심볼이 생기기 이전부터 존재한 메서드로 형변환을 직접 구현할 수 있다.
//  : 객체에 Symbol.toPrimitive가 없으면 자바스크립트는 아래 규칙에 따라 toString이나 valueOf를 호출
//      -> (hint) === string, toString -> valueOf
//      -> 나머지, valueOf -> toString
//  : toString은 문자열 "[object Object]"를 반환
//  : valueOf는 객체 자신을 반환
//  : 객체에 Symbol.toPrimitive와 valueOf가 없으면, toString이 모든 형 변환을 처리한다 (*)
let user2 = {
    name: "Taem",
    money: 1000,

    toString() {
        return `{name: ${this.name}}`;
    },

    valueOf() {
        return this.money;
    }
}

console.log(user2);
console.log(+user2);
console.log(user + 500);
alert(user2);
alert(+user2);
alert(user + 500);


// 3) 반환 타입
//  : toPrimitive, toString, valueOf은 hint에 명시된 자료형으로의 형 변환을 보장하지 않는다.
//  : 확실한 것은 객체가 아닌 원시값을 반환한다는 것이다.


// 4) 추가 형 변환
//  : 상당수의 연산자와 함수가 피연산자의 형을 변환시킨다.
//  : 객체가 피연산자일 경우 형변환의 단계
//      -> 객체는 원시형으로 변화
//      -> 변환 후 원시값이 원하는 형이 아닌 경우 또다시 형 변환
let obj = {
    // 다른 메서드가 없으면 toString에서 모든 형 변환 처리
    toString() {
        return "2";
    }
}

// 객체가 문자열 "2"로 바뀌고 곱셈 연산 과정에서 문자열 "2"가 숫자형 2로 바뀐다.
alert(obj * 2);     // 4
// 객체가 문자열 "2"로 바뀌고 덧셈 연산 과정에서 문자열 덧셈이 된다.
alert(obj + 2);     // 22
