const seq = (f) => (g) => typeof g === "function" ? seq((x) => f(g(x))) : f(g);

const res1 = seq((x) => x + 7)((x) => x * 2)(5);

const res2 = seq((x) => x * 2)((x) => x + 7)(5);

const res3 = seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7);

console.log({ res1, res2, res3 });
