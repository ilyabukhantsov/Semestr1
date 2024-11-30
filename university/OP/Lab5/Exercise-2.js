const array = () => {
  const dataArray = [];
  const get = (i) => dataArray[i];
  get.push = (data) => dataArray.push(data);
  get.pop = () => dataArray.pop();
  return get;
};
