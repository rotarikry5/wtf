// возвращает случайное число от 0 до 1
console.log(Math.random()); // 0.1534768990322
// возвращает минимальное число
console.log(Math.min(1, 2)); // 1
// возвращает максимальное число
console.log(Math.max(1, 2)); // 2
// возвращает число возведенное в степень
console.log(Math.pow(2, 8)); // 256

// округление в меньшую сторону
console.log(Math.floor(2.3)); // 2;
console.log(Math.floor(2.9)); // 2;

// округление в большую сторону
console.log(Math.ceil(1.2)); // 2
console.log(Math.ceil(0.1)); // 1

// округление до ближайшего числа
console.log(Math.round(2.4)); // 2
console.log(Math.round(2.5)); // 3

const toDoList = ['почитать', 'помыть посуду', 'помыть машину'];
const firstElement = toDoList[0]; // 'почитать'
const lastElement = toDoList[toDoList.length - 1]; // 'помыть машину'

let toDoList1 = ['почитать', 'помыть посуду', 'помыть машину'];
toDoList1[0] = 'прогуляться';
console.log(toDoList1); // ['прогуляться', 'помыть посуду', 'помыть машину'];

