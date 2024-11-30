const max = (matrix) => {
  let maxValue = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > maxValue) {
        maxValue = matrix[i][j];
      }
    }
  }
  return maxValue;
};

const ages = (persons) => {
  const res = {};
  for (const name in persons) {
    const person = persons[name];
    res[name] = person.died - person.born;
  }

  return res;
};
