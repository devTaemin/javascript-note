// 1) 화살표 함수
//  : let func = (arg1, arg2, ..., argN) => expression
//  : 만약 인수가 하나밖에 없다면 인수를 감싸는 괄호를 생략할 수 있다.
//  : 인수가 하나도 없을 때는 괄호를 비워놓으면 되는데 이때 괄호를 생략할 수 없다.
let age = +prompt("Enter your age", 18);
let welcome = (age < 18) ?
    () => alert("Hi") :
    () => alert("Hello");
welcome();


// 2) 본문이 여러 줄인 화살표 함수
//  : let func = (arg1, arg2, ..., argN) => { expression }
//  : 본문이 여러줄로 구성되면 중괄호를 사용해야하는데 다만 이 경우는 반드시 return 지시자를 사용하여 반환 값을 명시해야 한다.
let sum = (a, b) => {
    let result = a + b;
    return result;
}
alert(sum(1,2));


// 3) 문제
let ask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => { alert("Agree") },
    () => { alert("Disagree") }
);