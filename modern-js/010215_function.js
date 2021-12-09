// 함수
// 1) 함수 선언
//  : 함수는 프로그램을 구성하는 주요 구성 요소(building block)이다.
//  : 함수를 이용하면 중복 없이 유사한 동작을 하는 코드를 여러 번 호출할 수 있다.
//  : 함수 선언 방식
//      -> function name(parameters){...} 
function showMessage(){
    console.log("Hello World!");
}
showMessage();
showMessage();


// 2) 지역 변수
//  : 함수 내에서 선언한 변수인 지역 변수는 함수 안에서만 접근할 수 있다.
function showHello(){
    let msg = "Hola"
    console.log(msg);
}
showHello();


// 3) 외부 변수
//  : 함수 내부에서는 함수 외부의 변수인 외부 변수에 접근할 수 있다.
//  : 함수에서는 외부 변수에 접근하는 것뿐만 아니라, 수정도 할 수 있다.
//  : 만약 함수 내부에 외부 변수와 동일한 이름을 가진 지역변수가 있다면 외부 변수는 내부변수에 가려서 수정이 되지 않는다.
let userName = 'Taemin';
function showName(){
    userName = 'Jimin';
    let msg = 'Hello ' + userName;
    console.log(msg);
}
console.log(userName);
showName();
console.log(userName);


// 4) 매개 변수
//  : 매개변수를 이용하면 임의의 데이터를 함수 안에 전달할 수 있다.
//  : 함수는 언제나 매개변수로 들어온 값의 복사본을 사용한다.
function showHola(from, text){
    from = '[' + from + ']';
    console.log(from + ': ' + text);
}
let from = "Ann";
showHola(from, 'Hola');
console.log(from);


// 5) 기본값
//  : 매개변수에 값을 전달하지 않으면 그 값은 undefined가 된다.
//  : 매개변수가 2개인 함수에도 하나의 인수만 넣을 수 있다.
//  : 매개변수에 값을 전달하지 않아도 그 값이 undefined가 되지 않게 하려면 기본값을 설정해주면 된다.
//  : 해당하는 매개변수가 없을 때 기본값을 평가한다.
function showMessage(text){
    if (text === undefined) {
        text = 'Empty';
    }
    return text;
}
function showMoney(from, text=showMessage()){
    console.log( from + ": " + text );
}
showMoney("?");


// 6) 반환값
//  : 함수 호출 시 특정 값을 반환하게 할 수 있다. 이 특정 값을 반환 값이라고 부른다.
//  : 지시자 return은 함수 어느 곳이든 사용할 수 있므며 함수 실행은 즉시 중단되고 값이 반환된다.
//  : return 문이 없거나 return 지시자만 있는 함수는 undefined로 반환한다.
//  : return문 끝에는 자동으로 세미콜론이 붙기 때문에, return문과 값 사이에 줄을 삽입하면 안된다.


// 7) 함수이름짓기
//  : 함수는 어떤 동작을 수행하기 위한 코드로 '동사'이다. 
//  : 접두어에 동사를 붙여서 함수가 어떤 동작을 하는지 축약해서 간결하게 설명하는 것이 필요하다.
//  : 함수는 동작 하나만 담당해야 한다.
function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++){
        for (let j = 2; j < i; j++){
            if(i % j == 0) continue nextPrime;
        }
        console.log(i);
    }
}

function showPrimesV2(n){
    for (let i = 2; i < n; i++){
        if(!isPrime(i)) continue;
        console.log(i);
    }
}

function isPrime(n){
    for (let j = 2; j < n; j++){
        if(n % j == 0) return false;
    }
    return true;
}

showPrimes(10);
console.log("----------");
showPrimesV2(10);


// 문제
function checkAge(age) {
    return (age > 18) ? true : console.log("Require Agreement");
}

function checkAge2(age) {
    return (age > 18) || console.log("Require Agreement");
}

function checkMin(num1, num2) {
    return (num1 <= num2) ? num1 : num2;
}

function calPow(x, n) {
    if (x < 1) {
        console.log("X should be more than 1")
        return;
    } else {
        return (x === 1) ? 1 : x ** n;
    }
}

console.log(checkMin(2, 5));
console.log(checkMin(3, -1));
console.log(checkMin(1, 1));

console.log(calPow(3, 2));
console.log(calPow(3, 3));
console.log(calPow(1, 100));