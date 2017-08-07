const express = require("express")
const router = express.Router()
const daysOfWeek = {monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}

router.get('/days/:day', (req, res, next) => {
  const daySubmitted = req.params.day
  const number = daysOfWeek[daySubmitted]
  const days = Object.keys(daysOfWeek)
  console.log("Days==== ", days);

  if(days.includes(daySubmitted)) {
    res.json(number)
  } else {
    var err = new Error("'" + daySubmitted + "'" + " is not a valid day!")
    err.status = 400
    return next(err)
  }
})

router.post('/array/concat', (req, res, next) => {
  const array1 = req.body.array1
  const array2 = req.body.array2

  if(Array.isArray(array1) && Array.isArray(array2)){
      const concatArrays = array1.concat(array2)
    res.json({"results": concatArrays})
  } else {
    var err = new Error("Input data should be of type Array.")
    err.status = 400
    return next(err)
  }
})

module.exports = router
