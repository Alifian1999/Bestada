const arrNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

const findSpecificValueAndReplace = (value) =>{
    for(let i=0; i<arrNum.length; i++){
        if(value[i] % 7 === 0){
            value[i] = 'bestada'
        }
    }
    arrNum.push('success')
    const newArrNum = arrNum
    return newArrNum
}
console.log(findSpecificValueAndReplace(arrNum));