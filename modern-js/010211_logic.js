// 논리 연산자
// 1) OR (||)
//  : 첫 번째 truthy를 찾는 연산자
//  : 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나가며 피연산자를 평가, 여기서 truthy를 만나면 나머지 값들은 건드리지 않은 채 평가를 멈춘다.
//  : 각 피연산자를 불린형으로 변환, 변환 후 해당 값이 true이면 연산을 멈추고 해당 피연산자의 변환 전 원래 값을 반환
//  : 피연산자를 모두 평가한 경우 (모든 피연산자가 false인 경우) 마지막 피연산자를 반환
//  : 핵심은 반환 값이 형 변환을 하지 않은 원래 값이라는 것이다.
console.log(Boolean(null));
console.log( 1 || 2 );
console.log( null || 1 ) ;
console.log( null || 0 || 1 );
console.log( undefined || null || 0 );
let firstName = "";
let lastName = "";
let nickName = "Violet";
console.log(firstName || lastName || nickName || "anonymous");
console.log(true || "not printed");
console.log(false || "printed");


// 2) AND (&&)
//  : 첫 번째 falsy를 찾는 연산자
//  : 가장 왼쪽 피연산자부터 시작해 오른쪽으로 나가며 피연산자를 평가
//  : 각 피연산자는 불린형으로 변환, 변환 후 해당 값이 falsy면 연산을 멈추고 해당 피연산자의 변환 전 원래 값을 반환
//  : 피연산자를 모두 평가한 경우 (모든 피연산자가 true인 경우) 마지막 피연산자를 반환
//  : AND(&&)의 우선순위가 OR(||) 보다 높다.
console.log( 1 && 0 );
console.log( 1 && 5 );
console.log( null && 5 );
console.log( 0 && "아무거나 와도 상관이 없다.");
console.log( 1 && 2 && null && 3 );
console.log( 1 && 2 && 3 );


// 3) NOT(!)
//  : 피연산자를 불린형으로 변환하고 변환된 값의 역을 반환한다.
//  : 논리 연산자 중에서 가장 우선순위가 높아서 먼저 실행된다.
console.log( !true );
console.log( !0 );
console.log( !!"non-empty string" );
console.log( !!null );


// 4) ETC
//  : alert 메서드는 값을 반환하지 않기 때문에 undefined를 반환한다.