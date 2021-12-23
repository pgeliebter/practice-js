// Given an array of size n, generate and print all possible combinations of r elements in array. For example, if input array is {1, 2, 3, 4} and r is 2, then output should be {1, 2}, {1, 3}, {1, 4}, {2, 3}, {2, 4} and {3, 4}.
{
  let array
}

{
  // Use recursion to calculate the sum of an array of numbers.

  let array = [ 1, 2, 3, 4, 10, 123, 123, 23, 235, 123, 5463, 234 ]
  function recursiveSum(array) {
    if (array.length === 1) {
      return array[0]
    }
    // console.log(array[0])
    return array[0] + recursiveSum(array.slice(1))
  }
  console.log(recursiveSum(array))
}

{
  // Use recursion to check a string if it contains one or more charachters t,r,s,b using regex
  let trueString = 'trrrsbrsbt'
  let falseString = 'trrsbsrp'

  function recursiveStringChecker(string, regex = /[trsb]/, index = 0) {
    if (index === string.length - 1) {
      return regex.test(string[0])
    }
    return recursiveStringChecker(string[index + 1])
  }

  console.log(recursiveStringChecker(trueString))
  console.log(recursiveStringChecker(falseString))
}
