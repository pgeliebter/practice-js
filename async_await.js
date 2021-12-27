// synchronous
function double(n) {
  return n * 2
}

function add3(n) {
  return n + 3
}

function compute() {
  return add3(double(5))
}

console.log(compute())

// with promises
function promiseDouble(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n * 2), 500)
  })
}

function promiseAdd3(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n + 3), 500)
  })
}

function promiseCompute() {
  return promiseDouble(5).then(promiseAdd3)
}
let boo = promiseCompute()
setTimeout(() => console.log('Promises: ', boo), 1200)

// async await
function asyncAwaitDouble(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n * 2), 500)
  })
}

function asyncAwaitAdd3(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n + 3), 500)
  })
}

async function asyncAwaitCompute() {
  return await asyncAwaitAdd3(await asyncAwaitDouble(5))
}

let cee = asyncAwaitCompute()

let dee = asyncAwaitCompute().then((n) => n + 2)
setTimeout(() => console.log('Async: ', cee, ' Async with then: ', dee), 1500)
