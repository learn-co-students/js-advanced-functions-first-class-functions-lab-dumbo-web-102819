const returnFirstTwoDrivers = (driverArr) => {return [driverArr[0], driverArr[1]]}

const returnLastTwoDrivers = (driverArr) => [driverArr[driverArr.length-2], driverArr[driverArr.length-1]]

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (riders) {
  return (fare) => riders*fare
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare)

const fareTripler = (fare) => createFareMultiplier(3)(fare)

const selectDifferentDrivers = (drivers, func) => func(drivers)
