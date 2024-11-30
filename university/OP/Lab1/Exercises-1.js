let incNumber = (number) => {
  return ++number;
};

let incObject = (Num) => {
  Num.n = 6;
};

//Виклик 1 функції
const a = 5;
const b = incNumber(a);

console.dir({ a, b });

//Виклик 2 функції
const obj = { n: 5 };
incObject(obj);
console.dir(obj);
