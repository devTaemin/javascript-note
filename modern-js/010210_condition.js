// if와 ?를 사용한 조건 처리
// 1) 불린형으로의 변환
//  : if문은 괄호 안의 표현식을 평가하고 그 결과를 불린값으로 변환한다.
//  : 숫자(0), 빈문자열(""), null, undefined, NaN는 false로 변환
//  : 그 외의 값들은 true로 변환


// 2) else, else if
//  : 예시
let conditionYear = prompt("what is this year?");
if (conditionYear == 2021){
    alert("Correct");
} else if (ConditionYear >= 2021){
    alert("Not yet");
} else {
    alert("false");
}


// 3) 조건부 연산자 ?
//  : 물음표 연산자라고 불리는 조건부 연산자를 사용하면 짧고 간결하게 변형할 수 있다.
//  : result = condition ? value1 : value2
//      -> If condition === true, value1 otherwise value2
let conditionAge = prompt("How old are you?");
let accessAllowed = (conditionAge > 18) ? true : false;


// 4) 다중 물음표 연산자
//  : 물음표 연산자를 여러 개 연결하면 복수의 조건을 처리할 수 있다.
//  : if else를 사용해서 변형할 수 있다.
//  : 사용시 가독성을 생각해서 적절하게 활용해야 한다.
let currentAge = prompt("Enter your age", 28);
let conditionMessage = (currentAge < 3) ? "hello baby" :
                    (currentAge < 18) ? "hello" :
                    (currentAge < 100) ? "welcome" :
                    "you've enter the wrong number aren't you?";


