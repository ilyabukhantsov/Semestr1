const introspect = (iface) => {
  const arr = [];
  for (const key in iface) {
    const item = iface[key];
    if (typeof item === "function") arr.push([key, item.length]);
  }
  return arr;
};

const iface = {
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  },
};

console.log(introspect(iface));
console.log(introspect.length);
