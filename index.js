// code your solution here
function superbowlWin(array){
    const winRecord = array.find(record => record.result === "W");
    return winRecord ? winRecord.year : undefined;
};


 