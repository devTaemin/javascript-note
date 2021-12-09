// 메서드와 this
// 1) 메서드 만들기
//  : 객체는 사용자, 주문 등과 같이 실제 존재하는 개체를 표현하고자 할 때 생성된다.
//  : 객체의 메서드를 함수 표현식 혹은 함수 선언문을 프로퍼티에 할당함으로써 추가할 수 있다.
//  : 메서드 단축 구문을 활용해서 선언할 수 있다.
let user = {
    name: 'Taemin',
    age: 30,
    
    sayHola: function() {
        console.log("Hola");
    },

    sayBonjour() {
        console.log("Bonjour");
    }

}

user.sayHi = function() {
    console.log("Hi");
}

function sayHello() {
    console.log("Hello");
}

user.sayHello = sayHello;
user.sayHi();
user.sayHello();
user.sayHola();
user.sayBonjour();


// 2) 메서드와 this
//  : 메서드 내부에서 'this' 키워드를 사용하면 객체에 접근할 수 있다.
//  : 자바스크립트에서는 다른 프로그래밍 언어들과 달리 모든 함수에서 this를 사용할 수 있다.
//  : this의 값은 런타임에 결정이 된다. 메서드가 어디에서 정의되었든지 상관없이 점(.) 앞의 객체가 무엇인지에 따라 결정된다.
//  : 엄격모드에서 실행하면 this에는 undefined가 할당된다.
//  : 엄격모드가 아닌 경우 this는 전역 객체를 참조한다 (global, 브라우저 환경에서는 window)
global.name = "Taemin";
function sayName() {
    console.log(this.name);
}
sayName();


// 3) this가 없는 화살표 함수
//  : 화살표 함수는 일반 함수와 달리 this를 가지지 않습니다.
//  : 따라서 화살표 함수에서 this를 사용한 경우, 외부 함수에서 this를 가져오게 됩니다.
const arrowThis = {
    firstName: "Im",
    sayHi() {
        let arrow = () => { console.log("Hello " + this.firstName); }
        arrow();
    }
}
arrowThis.sayHi();


// 문제
// * this 값은 호출 시기에 결정이 되는데 그냥 ref를 주면 호출이 되지 않기 때문에 this는 undefined이다.
// undefined.name 이라고 하는것과 같으므로, undefined는 object가 아니다 라는 오류가 발생한다.
function makeUser() {
    return {
        name: 'John',
        ref() {
            return this;
        }
    }
}
let testUser = makeUser();
console.log( testUser.ref().name );


const a = {
    name: "john",
    ref: this,
}


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        console.log( this.step );
    }
}

// return this가 없으면 각 함수는 undefined를 return하니까 오류가 발생한다.
ladder.up().up().up().down().showStep();