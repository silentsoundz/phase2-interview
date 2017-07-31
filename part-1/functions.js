const month = argument => {
  if(typeof argument !== 'number') {
    let date = new Date(argument)
    let index = date.getMonth()
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    return months[index];
  } else {
    throw new Error('please enter valid date "YYYY, MM, DD"')
  }
}

const reverseSentence = (string) => {
  if(typeof string !== 'string') {
    throw new Error('please enter a valid string')
  } else {
    return string.split(" ").reverse().join(" ")
  }
}

const nameProps = (object) => {
    if(typeof object !== 'object') {
      throw new Error('please enter a valid object')
    } else {
      return Object.keys(object).sort()
    }
}

const filterBetween = (array, min, max) => {
  if(!Array.isArray( array)) {
    throw new Error('please enter valid array')
  }
  let filteredArray = array.filter((element) => {
    return element >= min && element <= max
  })
  return filteredArray
}

module.exports = {month, reverseSentence, nameProps, filterBetween}


