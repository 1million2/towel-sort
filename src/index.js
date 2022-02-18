
// You should implement your task here.
module.exports = function towelSort(matrix) {
  const newArr = [];
  if (!matrix) return [];
  matrix.forEach((el, i) => {
      if (i % 2 === 0) {
          el.forEach(value => {
              newArr.push(value);
          })
      } else {
          const reverseArr = el.reverse();
          reverseArr.forEach(value => newArr.push(value))
      }
  })
  return newArr;
}
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 12, 11]];
