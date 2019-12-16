// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
    return [arr[0], arr[1]]
}

const returnLastTwoDrivers = function(arr){
    return [arr[arr.length-2], arr[arr.length-1]]
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(num){
        return num*int
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arr, func){
    return func(arr)
}