// 옵셔널 체이닝
//  : 옵셔널 체이닝(optional chaining) '?,'을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있다.
// 1) 옵셔널 체이닝이 필요한 이유
//  : 만약 특정 객체가 중첩 객체가 없는 경우 에러 발생, 브라우저에서 페이지에 존재하지 않는 요소에 접근해 요소의 정보를 가져오라고 하면 문제 발생
//  : 명세서에 .?이 추가되기 전엔 이런 문제를 해결하기 위해 && 연산자를 사용한다.


// 2) 옵셔널 체이닝의 등장
//  : '?.'은 앞의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환한다.
//  : 객체가 존재하지 않더라도 에러가 발생하지 않는다.
//  : [단락평가] -> 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춘다.
let user = {
    address: {

    }
}
console.log( user );
console.log( user?.address );   //user가 존재하는 객체인가?
console.log( user?.address?.street );   //user가 존재하는 객체인가?, address가 존재하는 객체인가?


// 3) ?.() 와 ?.[]
//  : 예시
let user1 = {
    firstName: "Violet",
    admin() {
        console.log("Admin ID");
    }
}
let user2 = {};
let key = "firstName";

user1.admin?.();    //admin이 있으면 실행해라
user2.admin?.();    
console.log(user1?.[key]);  
console.log(user2?.[key]); 

delete user1?.firstName;