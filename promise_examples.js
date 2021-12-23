// const array = []
// array.push('before')

// new Promise((resolve) => {
//   array.push('constructed from sync')
//   resolve('where am i from async')
//   array.push('hey from sync!!!')
// }).then((n) => {
//   array.push(n)
//   array.push('then async')
// })
// array.push('after')

// console.log('Sync: ', array)
// setTimeout(() => console.log('Async: ', array))

function splitPromise() {
  let resolve
  const promise = new Promise((r) => {
    resolve = r
  })
  return [ resolve, promise ]
}

const [ resolve, promise ] = splitPromise()

console.log(resolve(2))

setTimeout(
  () =>
    console.log(
      'Async: ',
      promise.then((n) => {
        n * 2
      })
    ),
  0
)
