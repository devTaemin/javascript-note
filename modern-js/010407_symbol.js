// 심볼형
// : 자바스크립트는 객체 프로퍼티 키로 오직 문자형과 심볼형을 허용한다.


// 1) 심볼
//  : 심볼은 유일한 식별자를 만들고 싶을 때 사용한다.
//  : let variable = Symbol("description");
//  : '심볼 이름'이라고 불리는 description은 디버깅 시 유용하며 어떤 것에도 영향을 주지 않는다.
//  : 심볼은 유일성이 보장되는 자료형이기 때문에 설명이 동일한 심볼을 여러개 만들어도 심볼 값은 다르다.
//  : 자바스크립트에서는 문자형으로의 암시적 형 변환이 비교적 자유롭게 일어나는데, 심볼형은 자동 형변환이 일어나지 않는다.
//  : 만일 필요한 경우에만 명시적으로 '.toString()' 메서드를 명시적으로 호출한다.
let id = Symbol("symbol description");
console.log(id.toString());
console.log(id.description);

//  : 심볼은 유일성을 보장한다. 만약 서드파티 코드에서 가지고 온 객체에 새로운 프로퍼티를 추가하려고 할 때, 기존에 프로퍼티가 존재하면 덮어써버릴 여지가 있다.
//  : 객체 리터럴을 사용해 객체를 만든 경우, 대괄호를 사용해서 심볼형 키를 만들어야 한다.
let user = {
    name: "john",
    age: 30,
    [id]: 123
}

//  : '심볼형 프로퍼티 숨기기' => 심볼은 for ... in 구문에서 배제가 된다. 
for (let key in user){
    console.log(user[key]);
}

//  : 반면, Object.assign은 키가 심볼인 프로퍼티를 배제하지 않고 객체 내 모든 프로퍼티를 복사한다.
let clone = Object.assign({}, user);
console.log(clone);


// 2) 전역 심볼
//  : 심볼 이름이 같더라도 모두 별개로 취급된다. 
//  : 그런데 심볼 이름이 같은 개체를 가리키길 원하는 경우 심볼 이름을 기준으로 접근해야한다.
//  : [전역 심볼 레지스트리]: 심볼 이름을 이용하여 심볼에 접근하여 동일한 심볼을 반환한다.
//      -> Symbol.for("symbol description")
let idSymbol = Symbol.for("id");
let idAgain = Symbol.for("id");
console.log( idSymbol == idAgain );


// 3) Symbol.keyFor
//  : Symbol.for(key)의 반대는 Symbol.keyFor(symbol)
//  : .keyFor 을 이용해서 심볼 이름을 가져온다.
let sym2 = Symbol.for("sym");
console.log(Symbol.keyFor(idSymbol));
console.log(Symbol.keyFor(sym2));