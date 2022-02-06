/*1. Создать функцию которая вернет максимальное число из двух
maxNum(3, 7) // 7
maxNum(5, 1) // 5*/

// function maxNum1(x, y) {
//   if (x < y) {
//     return x;
//   } else {
//     return y;
//   }
// }

// const compare1 = maxNum1(3, 7);
// console.log(compare1);

// function maxNum2(x, y) {
//   if (x < y) {
//     return x;
//   } else {
//     return y;
//   }
// }

// const compare2 = maxNum2(5, 1);
// console.log(compare2);

// 2. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие:
// isAdult(20); // true
// isAdult(4); // false

// alert("Внимание! Только для совершеннолетних. Контент 20+");
 
// const years = prompt("Для входа на веб-сайт введите свой возраст!");

// function isAdult(a, b) {
//   const old = Number(years);
//   if (old >= a) {
//     alert('Welcome!');
//   return true;
// } else {
//     alert('Censored');
//     return false;
//   }
  
// }
// const res = isAdult(20, 4);
// console.log(res);

// 3. Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность нацело первого вторым:
// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

// function checkMultiplicity(x, y) {
//   if (Number.isInteger(x / y)) {
//     return 'Fits!';
//   }
//   return 'Does NOT fit!';
// }

// const one = checkMultiplicity(25, 5);
// console.log(one);

// const two = checkMultiplicity(15, 3);
// console.log(two);

// const three = checkMultiplicity(15, 5);
// console.log(three);

// const four = checkMultiplicity(15, 4);
// console.log(four);



// 4. Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет*/

// alert('Проверка возможности треугольника')
// const a = prompt('Введите значение стороны (а) треугольника');
// const aa = Number(a);
// const b = prompt('Введите значение стороны (b) треугольника');
// const bb = Number(b);
// const c = prompt('Введите значение стороны (c) треугольника');
// const cc = Number(c);

// function triangle(a, b, c) {
//   if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
//   return false;
// }   
//   if (a + b === c); {
//   return true;
// }
// }

// const res = triangle(a, b, c)
// console.log(res);    