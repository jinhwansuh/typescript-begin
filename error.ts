// const states = [
//   { name: 'Alabama', capital: 'Montgomery' },
//   { name: 'Ska', capitol: 'Kime' },
// ];

// for (const state of states) {
//   console.log(state.capital);
// } // 오류가 난다.

// interface State {
//   name: string;
//   capital: string;
// }

// const stes: State[] = [
//   { name: 'Alabama', capitol: 'Montgomery' }, // 친절하게 알려주는 타입스크립트
//   { name: 'Ska', capital: 'Kime' },
// ];

// // 의도를 명확히 해서 오류를 찾을 수 있다.

// const a = null + 7;
// const b = [] + 12;
// alert('Hello', 'Type');

// const names = ['Alice', 'Bob'];
// console.log(names[2].toUpperCase()); // toUpperCase typeError

// const x: number = null;
// const y: number | null = null;
// const z: number = undefined;

// 벡터 연산

// interface Vector2D {
//   x: number;
//   y: number;
// }

// interface NamedVector {
//   name: string;
//   x: number;
//   y: number;
// }
// function calculateLength(v: Vector2D) {
//   return Math.sqrt(v.x * v.x + v.y * v.y);
// }

// interface Vector3D {
//   x: number;
//   y: number;
//   z: number;
// }

// const v: NamedVector = { x: 3, y: 4, name: 'Zee' };
// console.log(calculateLength(v));

// function normalize(v: Vector3D) {
//   const length = calculateLength(v);
//   return {
//     x: v.x / length,
//     y: v.y / length,
//     z: v.z / length,
//   };
// }

// console.log(normalize({ x: 3, y: 4, z: 5 }));
// // 위에껀 오류를 잡지 못한다.

// let age: number;
// // age = '12';
// age = '12' as any;
// age += 1;
// console.log(age);

// let date: Date;

// // interface에서 사용하는 것들의 이름을 바꿀수 있다.
// interface Person {
//   firsts: string;
//   last: string;
// }

// const formatName = (p: Person) => `${p.firsts} ${p.last}`;
// const formatNameAny = (p: any) => `${p.first} ${p.last}`; // 안바뀜 any라

// interface ComonentProps {
//   onSelectItem: (id: number) => void;
// }

// function renderSelector(props: ComonentProps) {}

// let selectedId: number = 0;
// function handleSelectItem(item: any) {
//   selectedId = item.id;
// }
// renderSelector({ onSelectItem: handleSelectItem });

// // function getElement(elOrId: string | HTMLElement | null): HTMLElement { // 책의 코드
// //   if (typeof elOrId === 'object') {
// //     return elOrId;
// //   } else if (elOrId === null) {
// //     return document.body;
// //   } else {
// //     const el = document.getElementById(elOrId);
// //     return el;
// //   }
// // }

// function getElement1(elOrId: string | HTMLElement | null): HTMLElement | null {
//   // getElementById에는 null과 HTMLElement가 둘다 선언이 되어있다.
//   if (elOrId === null) {
//     return document.body;
//   } else if (typeof elOrId === 'object') {
//     return elOrId;
//   } else {
//     const el = document.getElementById(elOrId);
//     return el;
//   }
// }

// type AB = 'A' | 'B';
// const a: AB = 'A';

// interface Person {
//   name: string;
// }

// interface PersonSpan extends Person {
//   birth: Date;
//   death?: Date;
// }

// interface Point {
//   x: number;
//   y: number;
// }
// type PointKeys = keyof Point; // 타입은 "x" | "y" 이 된다.

// function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
//   return [];
// }

// const pts: Point[] = [
//   { x: 1, y: 1 },
//   { x: 2, y: 0 },
// ];

// sortBy(pts, 'z');

// const list = [1, 2]; // 이 타입은 number[] 인데
// const tuple: [number, number] = list; // 이건 안됌 [] 배열을 숫자들의 쌍 이라고 할 수가 없다. list가 상위 집합 [number, number]가 하위 집합

// const list1: [number, number] = [1, 2];
// const tuple1: number[] = list; // 이건 됌;

// const triple: [number, number, number] = [1, 2, 3];
// const double: [number, number] = triple; // length가 맞지 않기에 오류

// type T = Exclude<string | Date, string | number>; // 기본타입은 Date
// type NonZeroNums = Exclude<number, 0>;

// // 집합이라고 생각하면 편하다
// // T1이 T2에 할당 가능 (T1이 T2의 부분 집합)
// // T1이 T2를 상속 (T1이 T2의 부분 집합)

// interface Cylinder {
//   radius: number;
//   height: number;
// }

// const Cylinder = (radius: number, height: number) => ({ radius, height });

// function calculateVolume(shape: unknown) {
//   if (shape instanceof Cylinder) {
//     shape.radius; // {} 형식에 radius 값이 없다고 나옴.
//     // 이런 점이 가끔 오류를 야기함.
//   }
// }

// // 타입스크립트에는 타입의 종류가 무수히 많지만, 타입스크립트 플레이그라운드 활용
// // 자바스크립트에는 과거부터 지금까지 단 6개 string, number, boolean, undefined, object, function 의 런타임 종류만 존재

// type Tuple = [string, number, Date];
// type TupleEl = Tuple[number]; // 응? 뒤에 나온다니깐 우선 확인; (아이템 14)

// function email({ subject: string, body: string }) {}

// // 위 any타입 문제 해결

// function email1({ subject, body }: { subject: string; body: string }) {
//   // 값  추론
// }

// 아이템 9

// interface Person {
//   name: string;
// }

// const alice: Person = { name: 'Alice' }; // 타입 선언 Type Inference  권장
// const bob = { name: 'Bob' } as Person; // 타입 단언 Type Assertion

// // Why?

// const alice1: Person = {}; // 오류 생김 - 해당 인터페이스를 만족하는지 검사.
// const bob1 = {} as Person; // 오류 없음 - 강제로 타입을 지정했으니 타입 체커에게 오류를 무시하라고 하는 것

// const alice2: Person = {
//   name: 'Alice',
//   occupation: 'developer',
// };
// const bob2 = {
//   name: 'bob',
//   occupation: 'developer',
// } as Person; // 여기서도 오류가 없음,,

// const people = ['alice', 'bob', 'jan'].map((name) => ({ name })); // type이 {}
// people;

// const people1 = ['alice', 'bob', 'jan'].map((name) => ({ name } as Person));
// people1;

// const people2 = ['alice', 'bob', 'jan'].map((name) => ({} as Person));
// people2;

// const people3 = ['alice', 'bob', 'jan'].map((name) => {
//   const person: Person = { name };
//   return person;
// }); // 타입이 Person[]
// people3;

// const people4 = ['alice', 'bob', 'jan'].map((name): Person => ({ name })); // 간결하게 쓰기 가능 소괄호 중요!!!
// people4;

// const peopleReal: Person[] = ['alice', 'bob', 'jan'].map(
//   (name): Person => ({ name })
// ); // 직접 명시적 선언
// peopleReal;

// document.querySelector('#myButton').addEventListener('click', (e) => {
//   e.currentTarget;
//   const button = e.currentTarget as HTMLButtonElement;
//   button;
// }); // 직접적으로 쓸 경우 오류 발생 타입스크립트는 document를 읽지도 못하고 myButton이 뭔지도 모름.

// 아이템 10

// 아이템 11

// interface Room {
//   numDoors: number;
//   ceilingHeightFt: number;
// }
// const r: Room = {
//   numDoors: 1,
//   ceilingHeightFt: 10,
//   elephant: 'present',
// }; // 안됌

// const obj = {
//   numDoors: 1,
//   ceilingHeightFt: 10,
//   elephant: 'present',
// };
// const r1: Room = obj; // 됌 obj는 Room의 상위 집합이기 때문에,

// interface Options {
//   title: string;
//   darkMode?: boolean;
// }
// const setDarkMode = () => {};
// function createWindow(options: Options) {
//   if (options.darkMode) {
//     setDarkMode();
//   }
// }
// createWindow({
//   title: 'Spider',
//   darkmode: true, // darkMode입니까? 오류
// });

// const o1: Options = document;
// const o2: Options = new HTMLAnchorElement();

// const o3: Options = { darkmode: true, title: 'Ski Free' }; // 오류 : 객체리터럴을 통한 잉여 속성 체크
// const intermediate = { darkmode: true, title: 'Ski' };
// const o: Options = intermediate; // 정상 잉여 속성 체크를 하기 않았기 때문에!!!!!
// const o4 = { darkmode: true, title: 'Ski' } as Options; // 정상 타입 단언 역시 잉여 속성 체크를 안해서

// interface LineChartOptions {
//   logscale?: boolean;
//   invertedYAxis?: boolean;
//   areaChart?: boolean;
// }

// const opts = { logScale: true }; // 처음부터 공통된 속성이 없어서 오류가 난다.
// const oo: LineChartOptions = opts; // 이 부분 음?

// 아이템 12
/* 
function rollDice1(sides: number): number {
  return 1;
} // 함수 문장
const rollDice2 = function (sides: number): number {
  return 1;
}; // 함수 표현식
const rollDice3 = (sides: number): number => {
  return 1;
}; // 함수 표현식

// 타입스크립트에서는 함수 표현식을 사용하는 것이 좋다!
// 매개변수부터 반환값까지 전체를 함수 타입으로 선언하여 함수 표현식에 재사용할 수 있다는 장점이 있다.

type DiceRollFn = (sides: number) => number;
const rollDice: DiceRollFn = (sides) => {
  return 1;
};


// 왜 함수 표현식을 써야할까? 아래 예시
function add(a: number, b:number) {return a + b}
function sub(a: number, b:number) {return a - b}
function mul(a: number, b:number) {return a * b}
function div(a: number, b:number) {return a / b}
function aaa: BinaryFn {return 1} // 오류 이렇게 사용못함

type BinaryFn = (a: number, b: number) => number;
const add1: BinaryFn =(a, b) => a+ b;
const sub1: BinaryFn = (a,b) => a -b;
const mul1: BinaryFn = (a, b) => a * b;
const div1: BinaryFn = (a, b) => a/b;

 */

// 아이템 13
/* 
// 타입 적용 2가지 방법

type TState = {
  name: string;
  capital: string;
};

interface IState {
  name: string;
  capital: string;
}

// 타입과 인터페이스의 존재하는 차이를 분명하게 하자

const wyoming: TState = {
  name: 'Wyoming',
  capital: 'Cheyenne',
  population: 500_000, // TState에 populate이 없다.
};

type TDic = { [key: string]: string };
interface IDict {
  [key: string]: string;
}

type TFn = (x: number) => string;
interface IFn {
  (x: number): string;
}

const toStrT: TFn = (x) => '' + x;
const toStrI: IFn = (x) => '' + x;

// 복잡하고 유니언을 | 써야한다면 타입별칭을 써야하고
// 일관성과 보강의 관점에서는 인터페이스를 사용,
// 하지만 일관되게 사용하는 쪽으로 사용하는게 맞다! 이것이 (Team By Team?)

// 하지만, API에 대한 타입 선언을 작성해야 한다면 인터페이스를 사용하는게 좋다. 변경하기 편하기 대문에

interface ISta {
  name: string;
  capital: string;
}
interface ISta {
  population: number;
}

const ww: ISta = {
  name: 'ww',
  capital: 'cc',
  population: 23,
}; // 정상 선언 병합 delaration merging

// 타입 선언은 선언 병합을 할 순 없다! 잘못된 설계 */

// 아이템 14
/* 
// Don't repeat yourself DRY

interface Person {
  firstName: string;
  lastName: string;
}
interface PersonWithBirthDate {
  firstName: string;
  lastName: string;
  birth: Date;
}

// 여기에 middleName을 추가한다고 생각해보자 그럼 Person과 PersonWithDate는 다른 타입이 된다.

// 그래서 추가적인 필드만 작성하면 된다.

interface Person1 {
  firstName: string;
  lastName: string;
}

interface PersonWithBirthDate1 extends Person1 {
  birth: Date;
}

// 일반적이진 않지만 타입선언으로 할 수 있다.
type PersonWithBirthDate2 = Person1 & { birth: Date };

interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

// State를 확장하는 것
interface TopNavState {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
}
// State의 부분집합으로 만들 수 있다.
type TopNavState1 = {
  userId: State['userId'];
  pageTitle: State['pageTitle'];
  recentFiles: State['recentFiles'];
};
// 리팩토링 중복 제거
type TopNavState2 = {
  [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k];
};

// Pick!
type Pick<T, K> = { [k in K]: T[K] }; // 루프를 도는 Pick은 이러한 형태

type TopNavState3 = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;

interface SaveAction {
  type: 'save';
}
interface LoadAction {
  type: 'load';
}
type Action = SaveAction | LoadAction;
type ActionType = 'save' | 'load'; // 타입의 반복!

type ActionType1 = Action['type'];
type ActionRec = Pick<Action, 'type'>;

interface Name {
  first: string;
  last: string;
}

type DancingDuo<T extends Name> = [T, T];
const couple1: DancingDuo<Name> = [
  { first: 'ff', last: 'hh' },
  { first: 'qq', last: 'zz' },
];
const couple2: DancingDuo<{ first: string }> = [
  // 개념 물어보기 왜? 위에 제네릭에서 이미 T로 받은게 아닌가?
  { first: 'zz' },
  { first: 'ee' },
];

// 반복을 피하는게 좋다! 반복하지 않도록 주의
// extends를 사용해 인터페이스 필드의 반복을 피하기
// 제네릭은 아직 모르겠다. Pick, Partial, ReturnType 같은 제너릭 타입 익숙해지기.!!!
 */

// 아이템 15
/* 
const rocket = {
  name: 'Falcon 2',
  variant: 'Block 5',
  thrust: '7,604 kN',
};

type Rocket = { [property: string]: string }; // 인덱스 시그니처
// 3가지 의미
// 1. 키의 이름 - 키의 위치만 표시하는 용도
// 2. 키의 타입 - string이나 number 또는 symbol의 조합 - 보통은 string
// 3. 값의 타입 - 어떤 것이든

// 4가지 단점
// name대신 Name을 써도 통과
// 특정 키가 필요하지 않는다.
// 키마다 다른 타입을 가질 수 없다.
// name: 을 입력할 때, 키는 무엇이든 가능하기에 자동완성 기능이 동작하지 않는다.

const rocket1: Rocket = {
  name: 'Falcon',
  variant: 'v1.0',
  thrust: '4,595 kN',
}; // 정상

// 결론: 인덱스 시그니처는 부정확 하므로 더 나은 방법을 찾아야 한다.
// 위에서 Rocket은 interface여야 한다.

interface Rocket1 {
  name: string;
  variant: string;
  thrust_KN: number;
}

const rocket2: Rocket1 = {
  name: 'falcon 11',
  variant: 'v1',
  thrust_KN: 15_200,
};

// 인덱스 시그니처 더 공부 필요!
 */

// 아이템 16

// 숫자는 키로 사용할 수 없다.
// 배열은 객체이기때문에 숫자 인덱스를 사용하는 것이 당연하다.
// x['1'] 접근할 수 있다.
// Object.keys를 이용하면 키가 문자열로 출력된다.
// => 타입스크립트는 이러한 혼란을 바로잡기 위해 숫자 키를 허용하고 문자열 키와 다른 것으로 인식한다.

interface Array<T> {
  [n: number]: T;
}

const xs = [1, 2, 3];
const x0 = xs[0];
x0;
const x1 = xs['1'];
x1;

function get<T>(array: T[], k: string): T {
  return array[k]; // number형식이 아니다.
}

const keys = Object.keys(xs);
for (const key in xs) {
  key;
  const x = xs[key];
  x;
}

for (const x of xs) {
  x;
}

xs.forEach((x, i) => {
  i;
  x;
});

// for-in 루프는 for-of 또는 C스타일 for 루프에 비해 몇 배나 느리다.
