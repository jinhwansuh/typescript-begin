"use strict";
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
var age;
// age = '12';
age = '12';
age += 1;
console.log(age);
var date;
var formatName = function (p) { return p.firsts + " " + p.last; };
var formatNameAny = function (p) { return p.first + " " + p.last; }; // 안바뀜 any라
function renderSelector(props) { }
var selectedId = 0;
function handleSelectItem(item) {
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
function getElement1(elOrId) {
    // getElementById에는 null과 HTMLElement가 둘다 선언이 되어있다.
    if (elOrId === null) {
        return document.body;
    }
    else if (typeof elOrId === 'object') {
        return elOrId;
    }
    else {
        var el = document.getElementById(elOrId);
        return el;
    }
}
var a = 'A';
function sortBy(vals, key) {
    return [];
}
var pts = [
    { x: 1, y: 1 },
    { x: 2, y: 0 },
];
sortBy(pts, 'z');
var list = [1, 2]; // 이 타입은 number[] 인데
var tuple = list; // 이건 안됌 [] 배열을 숫자들의 쌍 이라고 할 수가 없다. list가 상위 집합 [number, number]가 하위 집합
var list1 = [1, 2];
var tuple1 = list; // 이건 됌;
var triple = [1, 2, 3];
var double = triple; // length가 맞지 않기에 오류
var Cylinder = function (radius, height) { return ({ radius: radius, height: height }); };
function calculateVolume(shape) {
    if (shape instanceof Cylinder) {
        shape.radius; // {} 형식에 radius 값이 없다고 나옴.
        // 이런 점이 가끔 오류를 야기함.
    }
}
