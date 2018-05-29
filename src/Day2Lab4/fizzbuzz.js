export default (input=15) => {
  if (input % 5 == 0 && input % 3 == 0) {
    return 'fizz buzz'
  } else if (input % 3 == 0) {
    return 'fizz'
  } else if (input % 5 == 0) {
    return  'buzz'
  } else {
    return input
  }
}