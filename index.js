// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0, 2);
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function() {
        return num * 5;
    }
}

const fareDoubler = (num) => {
    return num * 2;
}

const fareTripler = (num) => {
    return num * 3;
}


function selectDifferentDrivers(arr, func) {
    return func(arr);
}