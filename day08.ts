// Duplikasi array.map()

// const newData = duplicateMap(dataArray, callbackfn)
const values = [1, 2, 3];
const newData = duplicateMap(dataArray, (value, index) => {
  console.log(value * 2);
});
