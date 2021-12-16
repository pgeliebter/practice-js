const array = []
array.push('before')

new Promise((resolve) => {
  array.push('constructed from sync')
  resolve('where am i from async')
  array.push('hey from sync!!!')
}).then((n) => {
  array.push(n)
  array.push('then async')
})
array.push('after')

console.log('Sync: ', array)
setTimeout(() => console.log('Async: ', array))
