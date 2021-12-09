// new 연산자와 생성자 함수
// 1) 생성자 함수
//  : 생성자 함수 이름의 첫 글자는 대문자로 시작한다.
//  : 반드시 new 연산자를 붙여서 실행한다.
//  : 생성자 동작 순서
//      -> 빈 객체를 만들어서 this에 할당
//      -> 함수 본문 실행, this에 property 추가
//      -> this 반환
//  : 생성자의 의의는 재사용할 수 있는 객체 생성코드를 구현한다는 것이다.
//  : 모든 함수는 생성자 함수가 될 수 있는데, 이름의 첫 글자가 대문자인 함수는 new를 사용해서 실행해야 한다는 것도 공통의 약속이다.
//  : 인수가 없는 생성자는 괄호를 생략해서 호출할 수 있다.
function User(name) {
    // this = {};   (빈 객체가 암시작으로 만들어짐)
    this.name = name;
    this.isAdmin = false;
    // return this (this가 암시작으로 반환)
}

let user = new User("Taemin");
console.log(user.name);
console.log(user.isAdmin);

// 만약 익명 생성자 함수를 사용하면 재사용을 막으면서 코드를 캡슐화 할 수 있다.
let anonymousUser = new function() {
    this.name = "John";
    this.isAdmin = false;
}


// 2) new.target과 생성자 함수
//  : new.target 프로퍼티를 사용하면 함수가 new와 함께 호출되었는지 아닌지를 알 수 있다.
//  : 만약 new 없이 함수가 호출되었다면 undefined를 반환, 반면 new와 함께 함수가 호출되었다면 함수 자체를 반환한다.
function newUser(name){
    if( !new.target ){
        return new newUser(name);
    }
    this.name = name;
}

let zzab = anonymousUser;
let bora = newUser("보라");
console.log(zzab.name);
console.log(bora.name);


// 3) 생성자와 return문
//  : 생성자 함수에는 보통 return 문이 없다. 왜냐하면 반환해야 할 것들은 모두 this에 저장되고 this가 자동으로 반환되기 때문이다.
//  : 만약 객체를 return 한다면 해당 객체가 반환되고 this는 무시된다.
//  : 만약 원시형을 return 한다면 해당 this가 반환되고 원시형은 무시된다.
function BigUser() {
    this.name = "monkey";
    return {
        name: "Gorilla"
    }
}

function SmallUser() {
    this.name = "monkey";
    return "human";
}

console.log(new BigUser().name);
console.log(new SmallUser().name);


// 문제
function A() {
    return obj;
}
function B() {
    return obj;
}
let obj = {}

let a = new A();
let b = new B();

console.log(a === b);


// 문제
function Calculator() {
    let a = 0;
    let b = 0;
    this.read = function() {
        this.a = +prompt("Enter the number", 18);
        this.b = +prompt("Enter the number", 5);
    };

    this.sum = function() {
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum());
alert( "Mul=" + calculator.mul());


// 문제
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        let number = +prompt("Enter the number", 18);
        this.value += number;
    }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);