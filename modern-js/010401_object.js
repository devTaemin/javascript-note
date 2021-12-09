// 객체
//  : 객체는 중괄호를 이용해여 '키(Key)'와 '값(value)'의 쌍으로 구성된 프로퍼티를 넣는다.
//  : 키에는 문자형, 값에는 모든 자료형이 허용된다.
//  : '객체 생성자' (new Object()), '객체 리터럴' ({})


// 1) 객체 리터럴과 프로퍼티
//  : 점 표기법을 이용하여 프로퍼티 값을 읽고, 추가할 수 있다.
//  : delete 연산자를 사용하면 프로퍼티를 삭제할 수 있다.
//  : 마지막 프로퍼티 끝은 쉼표로 끝날 수 있으며 이런 쉼표를 trailing, hanging 쉼표라고 부른다.
//  : 상수 객체는 수정할 수 있다.
const user = {
    name: "Taemin",
    age: 28,
    "like birds": false,
}

console.log(user.name);
console.log(user.age);
console.log(user.isAdmin);
user.isAdmin = true;
console.log(user.isAdmin);
delete user.isAdmin;
console.log(user.isAdmin);


// 2) 대괄호 표기법
//  : 여러 단어를 조합한 프로퍼티 키를 이용할 경우 점 표기법으로는 프로퍼티 값을 읽을 수 없다.
//  : 점 표기법의 경우 '유효한 변수 식별자'의 경우 사용 가능하다.
//  : 대괄호 표기법 안에서 문자열을 사용할 땐 문자열을 따옴표로 묶어줘야 한다.
//  : 변수 key와 같은 것을 사용하면 런타임에 평가되기 때문에 사용자 입력값 변경 등에 따라 값이 변경될 수 있다.
let key = "like birds"
console.log(user[key]);
delete user[key];


// 3) 계산된 프로퍼티
//  : 객체를 만들 때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸야 있는 경우, 이를 계산된 프로퍼티라고 부른다.
//  : String이라서 접근할때 대괄호 표기법을 사용할 줄 알았는데 점 표기법을 사용하는 것이 인상적이다.
let fruit = prompt("Which one?" , "Apple");
let bag = {
    [fruit]: 5,
}
alert( bag.apple );

fruit = prompt("Which one??", "Apple");
bag = {}
bag[fruit] = 5;


// 4) 단축 프로퍼티
//  : 실무에서 프로퍼티 값을 기존 변수에서 받아와 사용하는 경우가 있다.
//  : 한 객체에서 일반 프로퍼티와 단축 프로퍼티를 함께 사용하는 것도 가능하다.

function makeUser(name, age){
    return {
        name,
        age: 30,
    }
}

let user = makeUser("Taemin", 28);
alert(user.name);
alert(user.age);


// 5) 프로퍼티 이름의 제약사항
//  : 객체의 프로퍼티 이름에는 제약이 없다.
//  : 키 값은 문자열로 자동 형변환이 된다.


// 6) in 연산자로 프로퍼티 존재 여부 확인
//  : 자바스크립트 객체는 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 undefined가 반환된다.
//  : 확인 방법
//      -> user.noSuchProperty === undefined
//      -> "key" in object => return true or false
//  : 프로퍼티 이름은 보통 따옴표로 감싼 문자열이다. 따옴표를 생략하면 엉뚱한 변수가 조사대상이 된다.
//  : 만약 프로퍼티 값은 존재하는데, 값에 undefined가 할당된 예시의 경우 프로퍼티가 존재해도 undefined가 반환되기 때문에 in을 사용하여 존재를 확인한다.
let obj = {
    test: undefined,
}

console.log( obj.test === undefined );
console.log( "test" in obj );


// 7) for in 반복문
//  : for .. in 반복문을 사용하면 객체의 모든 키를 순회할 수 있다.
//  : for (key in object) { 각 프로퍼티 키를 이용하여 본문을 실행 }
let testUser = {
    name: "Taemin",
    age: 28,
    isAdmin: true,
}

for (let key in testUser) {
    console.log( key );     // name, age, isAdmin
    console.log( testUser[key] );   // Taemin, 28, true
}


// 8) 객체 정렬 방식
//  : 프로퍼티에도 순서가 있을까? '특별한 방식으로 정렬이 된다'
//  : 정수 프로퍼티의 경우 자동으로 오름차순으로 정렬되고 실행된다, 나머지 프로퍼티는 객체에 추가한 순서 그대로 정렬된다.
//  : 정수 프로퍼티란 자료형 변형으로 문자열과 정수를 오가는 값을 말한다.


// 문제
user = new Object();
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

function isEmpty(object) {
    for (let key in object) {
        // if loop is started, object is not empty
        return false;
    }
    return true;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = salaries[John] + salaries["Ann"] + salaries.Pete;

let total = 0;
for (let key in salaries) {
    total += salaries[key];
}