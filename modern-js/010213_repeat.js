// while. for 반복문
// 1) while
//  : 반복문 조건엔 비교뿐만 아니라 모든 종류의 표현식, 변수가 올 수 있다.
//  : 조건은 while에 의해 평가되고, 평가 후엔 불린값으로 변경된다.


// 2) do white
//  : 본문이 먼저 실행되고, 조건을 확인한 후 조건이 truthy인 동안엔 본문이 계속 실행된다.
//  : 본문이 truthy인지 아닌지에 상관없이, 본문을 최소한 한번이라도 실행하고 싶은 경우 활용해야함


// 3) for
//  : for(begin; condition; step){ body }
//  : 구성요소를 생략하는 것도 가능하다


// 4) break
//  : 반복문을 빠져나오기 위해 사용한다.
//  : ? 오른쪽에는 사용해서는 안된다.
let sum = 0;
while(true) {
    let value = +prompt("Enter the number", '');
    if( !value ) break;
    sum += value;
}
alert( 'total: ' + sum );


// 5) continue
//  : 현재 실행중인 이터레이션을 멈추고 반복문이 다음 이터레이션을 강제로 실행시키도록 한다.
//  : ? 오른쪽에는 사용해서는 안된다.


// 6) break와 continue의 레이블
//  : 레이블(label)은 반복문 앞에 콜론과 함께 쓰이는 식별자
//  : break와 continue는 반복문 안에서만 사용할 수 있고, 레이블은 반드시 break나 continue 지시자 위에 있어야 한다.
//  : 예시
//      -> labelName: for (...){...}
outer: for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        let input = +prompt(`(${i}, ${j})의 값`, '');
        if( !input ) break outer;
    }
}

// 7) 예제
let max = +prompt("Enter the maximum number range.", '');
for (let i = 2; i <= max; i++){
    let prog = false;
    if(i === 2){ console.log(i); }
    else {
        for (let j = 2; j < i; j++){
            if(i % j == 0){ prog=false; break; }
            else{ prog=true; }
        }
        if(prog){
            console.log(i);
        }
    }
}

let range = 10;
nextPrime: for (let i = 2; i <= range; i++){
    for (let j = 2; j < i; j++){
        if( i % j == 0 ) continue nextPrime;
    }
    console.log(i);
}


