const arr = [
  42,
  "hello",
  true,
  null,
  undefined,
  Symbol("unique"),
  {},
  [],
  function () {},
  NaN,
  "world",
  false,
  new Date(),
  BigInt(9007199254740991),
  /regex/,
];

const hashTable = {
  number: 0,
  string: 0,
  boolean: 0,
};

for (const value of arr) {
  const type = typeof value;
  if (hashTable.hasOwnProperty(type)) {
    hashTable[type]++;
  }
}

console.dir({ hashTable });
