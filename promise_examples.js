const array = []
array.push('before')

new Promise((resolve) => {
  array.push('constructed')
  resolve('where am i')
  array.push('hey!!!')
}).then((n) => {
  array.push(n)
  array.push('then')
})
array.push('after')

console.log('Sync: ', array)
setTimeout(() => console.log('Async: ', array))
