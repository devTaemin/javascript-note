// null 병합 연산자
//  : null 병합 연산자(??)를 사용하면 짧은 문법으로 여러 피연산자 중 그 값이 '확정 되어있는' 변수를 찾을 수 있습니다.
//  : 변수에 기본값을 할당하는 용도로 사용할 수 있따.
//  : a가 null도 아니고, undefined도 아니면 a otherwise b
//  : 연산자 우선순위가 ?와 = 보다는 높고 나머지 보다는 낮다 그래서 괄호를 같이 사용하는 것이 좋다.
//  : 안정성 이슈때문에 ??는 괄호없이는 ||나 &&와 같이 사용할 수 없다.
//  : 예시
//      -> x = a ?? b
//      -> x = (a !== null && a !== undefined) ? a : b;
let firstName = null;
let lastName = null;
let nickName = "Violet";
console.log( firstName ?? lastName ?? nickName ?? "Anonymous" );
let height;
console.log(height);
height = height ?? 0;
console.log(height);
console.log( height || 100 );
console.log( height ?? 100 );
let weight = null;
let feet = null;
let area = (weight ?? 100) * (feet ?? 50);
console.log(area);
area = weight ?? 100 * feet ?? 50;
console.log(area);
console.log(Number(null));
