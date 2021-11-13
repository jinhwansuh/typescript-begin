"use strict";
// const states = [
//   { name: 'Alabama', capital: 'Montgomery' },
//   { name: 'Ska', capitol: 'Kime' },
// ];
var r = {
    numDoors: 1,
    ceilingHeightFt: 10,
    // elephant: 'present',
}; // 안됌
var obj = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: 'present',
};
var r1 = obj; // 됌 obj는 Room의 상위 집합이기 때문에,
var setDarkMode = function () { };
function createWindow(options) {
    if (options.darkMode) {
        setDarkMode();
    }
}
createWindow({
    title: 'Spider',
    darkmode: true, // darkMode입니까? 오류
});
