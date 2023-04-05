export const createTwoDemensionlArr = (oneDimensionalArr, size) => {
  const copy = [...oneDimensionalArr];
  const newArr = [];
  while(copy.length) newArr.push(copy.splice(0,size));

  return newArr;
}