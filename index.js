const returnFirstTwoDrivers = function(array1) {
    let newarr = []
    newarr[0] = array1[0]
    newarr[1] = array1[1]
    return newarr
}

const returnLastTwoDrivers = function(array2) {
    let newarr = []
    newarr[0] = array2[array2.length - 2]
    newarr[1] = array2[array2.length -1]
    return newarr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fareMult) {
    return (function (fareInt) {
        return fareInt * fareMult
    })
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, function1) {
    return function1(arrayOfDrivers)
}