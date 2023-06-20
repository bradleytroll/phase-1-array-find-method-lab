// Redoing old labs for extra practice. New code written here with old code commented out below.

function superbowlWin(array) {
   for (const entry of array) {
    if (entry.result === "W") {
        return entry.year;
    }
   }
   return undefined;
}


// // code your solution here
// function superbowlWin(array){
//     const winRecord = array.find(record => record.result === "W");
//     return winRecord ? winRecord.year : undefined;
// };


 