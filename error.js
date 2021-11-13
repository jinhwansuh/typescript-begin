"use strict";
// const states = [
//   { name: 'Alabama', capital: 'Montgomery' },
//   { name: 'Ska', capitol: 'Kime' },
// ];
var alice = { name: 'Alice' }; // 타입 선언 Type Inference  권장
var bob = { name: 'Bob' }; // 타입 단언 Type Assertion
// Why?
var alice1 = {}; // 오류 생김
var bob1 = {}; // 오류 없음 - 강제로 타입을 지정했으니 타입 체커에게 오류를 무시하라고 하는 것
