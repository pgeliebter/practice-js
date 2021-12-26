let events = []
function runLoop() {
  const interval = setInterval(() => {
    console.log('Running next batch', events.length)
    while (events.length > 0) {
      const nextEvent = events.shift()
      console.log(nextEvent)
    }
  }, 990)
  setTimeout(() => {
    clearInterval(interval)
  }, 10000)
}
function queEvent(event) {
  events.push(event)
}
let count = 1
function pushCount() {
  queEvent(count)
  count++
}

setInterval(() => {
  pushCount()
}, 183)

runLoop()
