function produceDrivingRange(range) {
  return function(trip){trip>range?false:true}
}