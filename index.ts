const states = [
  { name: 'Alabama', capitol: 'Montgomery' },
  { name: 'Ska', capitol: 'Kime' },
];

for (const state of states) {
  console.log(state.capital); // 오류가 난다.
}

interface State {
  name: string;
  capital: string;
}

const stes: State[] = [
  { name: 'Alabama', capitol: 'Montgomery' }, // 친절하게 알려주는 타입스크립트
  { name: 'Ska', capital: 'Kime' },
];

// 의도를 명확히 해서 오류를 찾을 수 있다.

const a = null + 7;
const b = [] + 12;
alert('Hello', 'Type');

const names = ['Alice', 'Bob'];
console.log(names[2].toUpperCase()); // toUpperCase typeError
