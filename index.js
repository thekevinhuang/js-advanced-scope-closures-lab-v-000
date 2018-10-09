function produceDrivingRange(range) {
  return function(block1, block2){
    let trip = Math.abs(parseInt(block1)-parseInt(block2))
    let blockDifference = Math.abs(trip-range)
    if (trip>range){
      return `${blockDifference} blocks out of range`
    }
    else {
      return `within range by ${blockDifference}`
    }
  }
}

function produceTipCalculator() {
  
}

function createDriver() {
  
}