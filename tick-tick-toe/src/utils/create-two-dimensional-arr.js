export const createTwoDemensionlArr = (size) => {
  let arr = [];

  for (let i = 0; i < size; i++) {
  	arr.push([]);
    
    for (let j = 0; j < size; j++) {
      arr[i].push(i * size + j)
    }
  }

  return arr;
}