// Switch 문
//  : 특정 변수를 다양한 상황에서 비교할 수 있게 해준다.
//  : 하나 이상의 case문으로 구성이 되며 대개 default문도 있지만, 이는 필수가 아니다.
//  : case문에서 일치하는 값을 찾으면 해당 case문 아래의 코드가 실행된다. 이때, break문을 만나거나 switch문이 끝나면 코드의 실행이 멈춘다.
//  : 값과 일치하는 case문이 없다면, default문 아래의 코드가 실행된다. default문에는 break가 필요하지 않다.
//  : switch문과 case문은 모든 형태의 표현식을 인수로 받는다.
//  : 만약 break문이 없는 경우엔 조건에 상관없이 다음 case문이 실행된다.
let a = 2 + 2;
switch(a){
    case 3:
        console.log("smaller");
        break;
    case 4:
        console.log("same");
        break;
    case 5:
        console.log("bigger");
        break;
    default:
        console.log("unKnown");
}

//  : Switch문 자료형의 중요성
//      -> Switch문은 일치 비교로 조건을 확인한다.
//      -> 비교하려는 값과 case문의 값이 자료형이 같아야 해당 case문이 실행된다.