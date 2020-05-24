/*Create a function or method that when given a time (a string in HH:MM format) give this smallest angle created between the hour and minute hands. Please provide a https://repl.it/ link and a github. circular 

assumptions

round wall clock
12 hour format fro time
*/

const clockAngle = (time) => {

  const circleDegree = 360
  const minutesInHour = 60
  const hoursInDay = 12

  if(!time){
    return 'Please use a valid input'
  }

  //extracting the hour and minutes from the string
  //then converting them to numbers
  const hour = parseInt(time.slice(0,2))
  const minutes = parseInt(time.slice(-2,time.length))

  //calculating the degrees of movement for the minute hand
  //calculating the angle of the minute hand
  let minAngle = (circleDegree/minutesInHour) * minutes 

  
  //calcualting te hour hand angle
  let initHourAngle = (circleDegree/hoursInDay) * hour 

  //cgetting the offset from the absolute hour
  let percentOfHour = minutes / minutesInHour

//correcting the hour angle if it is not on the absolute hour mark
  let correctedHourAngle = initHourAngle + (percentOfHour * (circleDegree/hoursInDay) )

//calculating te smallest angle 
//getting the ab value to prevent negatives
  let smallestAngle = Math.abs(correctedHourAngle - minAngle)

  return Math.min(circleDegree - smallestAngle,smallestAngle)
  
}

console.log('12:20',clockAngle('12:20'))

console.log('12:00',clockAngle('12:00'))

console.log('10:00',clockAngle('10:00'))

console.log('9:00',clockAngle('9:00'))

console.log('6:00',clockAngle('6:00'))
