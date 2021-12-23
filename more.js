function tryAndCatch() {
  try {
    throw new Error('oh no')
  } catch (e) {
    // do nothing
  }
  return 'we got to the end'
}
tryAndCatch()
