const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce((acumulator, current) => {
    return acumulator + current;
})


// const letters = ["a", "b", "c", "b", "a", "a", "c", "b", "a", "a", "c", "e", "f", "g", "h", "u", "i", "b", "a", "a", "c", "b", "a", "a", "e", "f", "g", "h", "h", "u", "i"];
// let totalLetters = letters.reduce((accumulator, current) => {
//     if(accumulator[current]){
//         accumulator[current] += 1;
//     }else{
//         accumulator[current] = 1;
//     }
//     return accumulator;
// },{})
// console.log(totalLetters);