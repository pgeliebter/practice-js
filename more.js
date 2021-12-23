function tryAndCatch() {
  try {
    throw new Error('oh no')
  } finally {
  }
  // catch (e) {
  //   // do nothing
  // }

  return 'we got to the end'
}
console.log(tryAndCatch())
