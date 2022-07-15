const array = [3,7,1,2,6,7,8,9,12,5,3,12]
const AscArr = []

const findSameValue = (arr) => {
    let sortedArr = arr.slice().sort(); 
    let results = [];
    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (sortedArr[i + 1] === sortedArr[i]) {
        results.push(sortedArr[i]);
      }
    }
    const AscendingArr = array.sort((a,b) => a - b)
    AscArr.push(AscendingArr)
    return results;
  }
  findSameValue(array)
  console.log(`nilai/value yang sama dari array ${AscArr} adalah ${findSameValue(array)}`);

