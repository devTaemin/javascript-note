// 1) let keyword
//  : let을 이용하여 선언된 변수는 값을 변경할 수 있다.
//  : 과거에는 var을 이용해서 변수를 선언했다.
//  : 주의사항은 let을 이용하여 동일한 명칭의 변수를 여러번 선언하면 에러가 발생한다는 것이다.
let user = 'Taemin'
  , age = 28
  , message = 'Miss you my friend';


// 2) 변수 명명 규칙
//  : 변수 명에는 오직 문자와 숫자, 그리고 $와 _만 사용할 수 있다.
//  : 첫 글자는 숫자가 될 수 없다.
//  : 대소문자는 구별된다.
//  : 
let $ = 'dollar'
  , _ = 'underscore';


// 3) 상수
//  : 변화하지 않는 변수
//  : 변경을 시도할 경우 에러가 발생함
//  : 대문자 상수를 활용하여 기억하기 힘든 값을 변수에 할당하여 별칭으로 사용합니다.
const myBirdthday = '18.07.1994';
const COLOR_RED = '#F00';


// 4) 바람직한 변수명
//  : 변수 명은 간결하고 명확하게
//  : 최대한 서술적이고 간결하게 명명
//  : 카멜표기법
let ourPlanetName = 'Earth';
let currentUserName = 'John';
