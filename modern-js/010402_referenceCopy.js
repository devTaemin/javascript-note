// 1) 참조에 의한 객체 복사
//  : 객체와 원시 타입의 근본적인 차이 중 하나는 객체는 '참조'에 의해 저장되고 복사된다는 것이다.
//  : 반면, 원시값은 '값 그대로' 저장, 할당되고 복사된다.
//  : 즉, 변수에는 객체가 저장되어 있는 '메모리 주소'인 객체에 대한 '참조 값'이 저장된다.
//  : 따라서, 객체가 할당된 변수를 복사할 땐 객체의 참조 값이 복사되고 객체는 복사되지 않는다.
let user = {
    name: 'John',
}

let admin = user;
admin.name = 'Pete';
console.log(user.name);


// 2) 참조에 의한 객체 비교
//  : 객체는 비교 시 피연산자인 두 객체가 동일한 경우에 참을 반환한다.
//  : 그래서 동등 연산자(==)와 일치 연산자(===)는 동일하게 작동한다.


// 3) 객체 복사, 병합과 Object.assign
//  : 객체가 할당된 변수를 복사하면 동일한 객체에 대한 참조 값이 하나 더 만들어진다.
//  : 만약 객체를 복제하고 싶다면 아래와 같이 기존 객체의 프로퍼티들을 순회해서 복사해서 만든다.
let testUser = {
    name: 'John',
    age: 30,
}
let clone = {}
for (let key in testUser) {
    clone[key] = testUser[key];
}
console.log(clone.name);
console.log(clone["age"]);

//  : 다른 방법으로는 Object.assign을 사용하는 것이다.
//  : 목표로 하는 객체(destination)에 대하여 다음 객체들의 (src) 프로퍼티들을 집어넣는다.
//  : 만약 목표 객체에 동일한 이름을 가진 프로퍼티가 있는 경우 기존 값이 덮어씌워 진다.
//  : 예시
//      -> Object.assign(dest, [src1, src2, src3, ...])
let copyUser = {
    name: 'Paul',
}
let permission1 = { canView: true }
let permission2 = { canEdit: true }

Object.assign(copyUser, permission1, permission2);
console.log(copyUser.name);
console.log(copyUser.canView);
console.log(copyUser.canEdit);


// 4) 중첩 객체 복사
//  : 만약 프로퍼티가 다른 객체에 대한 참조 값인 경우 깊은 복사 (Deep copy)를 재귀를 사용하여 구현해줘야 한다.