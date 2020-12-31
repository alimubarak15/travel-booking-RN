export const convertTo2dArray = (arr, col) => {
  let temp = [];
  for (let index = 0; index < arr.length; index += col) {
    temp.push(arr.slice(index, index + col));
  }
  return temp;
};
