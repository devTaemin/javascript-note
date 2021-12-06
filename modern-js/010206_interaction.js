// 브라우저 환경에서 사용되는 사용자 인터페이스

// 1) alert
//  : 메세지가 있는 작은 창을 모달 창(Modal window)라고 부른다.
//  : '모달'이란 페이지의 나머지 부분과 상호작용이 불가능 하다는 의미가 내포되어 있다.
alert('Hello alert!');


// 2) prompt
//  : 브라우저에서 제공하는 prompt 함수는 두 개의 인수를 받는다.
//  : 사용자가 입력을 취소한 경우 null이 반환된다.
//  : prompt(title, [default])
//      * title -> 사용자에게 보여줄 문자열
//      * default -> 입력 필드의 초깃값 (선택값)
let promptAge = prompt('Enter your age: ', 28);
alert(`Your age is ${ promptAge }`);


// 3) confirm
//  : 매개 변수로 받은 question에 대하여 확인 및 취소 버튼이 있는 모달 창을 보여준다.
//  : 사용자가 확인 버튼을 누르면 true, 그 외의 경우는 false가 반환된다.
let confirmIsBoss = confirm("Are you a Boss?");
alert(confirmIsBoss);


// 제약사항
//  : 모달 창의 위치는 브라우저가 결정하며, 대개 브라우저 중앙에 위치한다.
//  : 모달 창의 모양은 브라우저마다 다르다. 개발자는 창의 모양을 수정할 수 없다.

