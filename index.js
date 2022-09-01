const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//didnt work at First, added a ; after return 
const totalBatteries = batteryBatches.reduce(function(total, batches){
    return batches + total;
})
