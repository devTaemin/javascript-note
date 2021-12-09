// 가비지 컬렉션
// 1) 가비지 컬렉션의 기준
//  : 자바스크립트는 '도달가능성(reachability)'이라는 개념을 사용해서 메모리 관리를 수행한다.
//  : '도달가능한(reachable)' 값은 쉽게 말해 어떻게든 접근하거나 사용할 수 있는 값을 의미한다.
//  : 도달가능한 값은 메모리에서 삭제되지 않는다.
//  : (루트) -> 태생부터 도달 가능하기 때문에 명백한 이유가 없이는 삭제되지 않는 것
//          -> 현재 함수의 지역 변수와 매개 변수
//          -> 중첩 함수의 체인에 있는 함수에서 사용되는 변수와 매개변수
//          -> 전역 변수
//  : 루트가 참조하는 값이나 체이닝으로 루트에서 참조할 수 있는 값은 도달 가능한 값이 된다.


// 2) 가비지 컬렉터
//  : 모든 객체를 모니터링하며 '도달할 수 없는' 객체를 삭제한다.
//  : 객체들이 연결되면 섬 같은 구조를 만드는데, 이 섬에 도달할 방법이 없는 경우 해당 섬을 구성하는 객체가 전무 메모리에서 삭제된다.
//  : 즉 루트가 삭제가 되면 이하 객체에는 global으로 부터 도달할 수 있는 방법이 없기 때문에 모두 메모리에서 제거된다.
//  : 서로 연결된 객체이더라도 도달 불가능할 수 있다.


// 3) mark and sweep 알고리즘
//  : 가비지 컬렉터는 루트 정보를 입수하고 이를 mark(기억) 한다.
//  : 루트가 참조하는 모든 객체들을 방문하고 mark한다.
//  : 그 이하 참조 객체들을 계속 mark한다.
//  : mark되지 않는 모든 객체를 메모리에서 삭제한다.
