const ipChange = (ip = "101.0.20.1") => {
  const fn = (currentRes, item) => (currentRes << 8) + parseInt(item);
  return ip.split(".").reduce(fn, 0);
};

console.log(ipChange());
