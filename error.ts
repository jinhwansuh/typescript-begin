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

let age: number;
// age = '12';
age = '12' as any;
age += 1;
console.log(age);

let date: Date;

// interface에서 사용하는 것들의 이름을 바꿀수 있다.
interface Person {
  firsts: string;
  last: string;
}

const formatName = (p: Person) => `${p.firsts} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`; // 안바뀜 any라

interface ComonentProps {
  onSelectItem: (id: number) => void;
}

function renderSelector(props: ComonentProps) {}

let selectedId: number = 0;
function handleSelectItem(item: any) {
  selectedId = item.id;
}
renderSelector({ onSelectItem: handleSelectItem });

// function getElement(elOrId: string | HTMLElement | null): HTMLElement { // 책의 코드
//   if (typeof elOrId === 'object') {
//     return elOrId;
//   } else if (elOrId === null) {
//     return document.body;
//   } else {
//     const el = document.getElementById(elOrId);
//     return el;
//   }
// }

function getElement1(elOrId: string | HTMLElement | null): HTMLElement | null {
  // getElementById에는 null과 HTMLElement가 둘다 선언이 되어있다.
  if (elOrId === null) {
    return document.body;
  } else if (typeof elOrId === 'object') {
    return elOrId;
  } else {
    const el = document.getElementById(elOrId);
    return el;
  }
}

type AB = 'A' | 'B';
const a: AB = 'A';

interface Person {
  name: string;
}

interface PersonSpan extends Person {
  birth: Date;
  death?: Date;
}

interface Point {
  x: number;
  y: number;
}
type PointKeys = keyof Point; // 타입은 "x" | "y" 이 된다.

function sortBy<K extends keyof T, T>(vals: T[], key: K): T[] {
  return [];
}

const pts: Point[] = [
  { x: 1, y: 1 },
  { x: 2, y: 0 },
];

sortBy(pts, 'z');

const list = [1, 2]; // 이 타입은 number[] 인데
const tuple: [number, number] = list; // 이건 안됌 [] 배열을 숫자들의 쌍 이라고 할 수가 없다. list가 상위 집합 [number, number]가 하위 집합

const list1: [number, number] = [1, 2];
const tuple1: number[] = list; // 이건 됌;

const triple: [number, number, number] = [1, 2, 3];
const double: [number, number] = triple; // length가 맞지 않기에 오류

type T = Exclude<string | Date, string | number>; // 기본타입은 Date
type NonZeroNums = Exclude<number, 0>;

// 집합이라고 생각하면 편하다
// T1이 T2에 할당 가능 (T1이 T2의 부분 집합)
// T1이 T2를 상속 (T1이 T2의 부분 집합)
