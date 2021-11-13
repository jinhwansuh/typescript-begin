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

interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}
const r: Room = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
}; // 안됌

const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
};
const r1: Room = obj; // 됌 obj는 Room의 상위 집합이기 때문에,

interface Options {
  title: string;
  darkMode?: boolean;
}
const setDarkMode = () => {};
function createWindow(options: Options) {
  if (options.darkMode) {
    setDarkMode();
  }
}
createWindow({
  title: 'Spider',
  darkmode: true, // darkMode입니까? 오류
});

const o1: Options = document;
const o2: Options = new HTMLAnchorElement();

const o3: Options = { darkmode: true, title: 'Ski Free' }; // 오류 : 객체리터럴을 통한 잉여 속성 체크
const intermediate = { darkmode: true, title: 'Ski' };
const o: Options = intermediate; // 정상 잉여 속성 체크를 하기 않았기 때문에!!!!!
const o4 = { darkmode: true, title: 'Ski' } as Options; // 정상 타입 단언 역시 잉여 속성 체크를 안해서

interface LineChartOptions {
  logscale?: boolean;
  invertedYAxis?: boolean;
  areaChart?: boolean;
}

const opts = { logScale: true }; // 처음부터 공통된 속성이 없어서 오류가 난다.
const oo: LineChartOptions = opts; // 이 부분 음?
