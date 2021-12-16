/*
 * Complete the 'balancedSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
/**
 * this is a good use case for recursion?
 * I have to go through each element and calulate the total sum to the right and to the left
 * I can use the ... and reduce to do it
 * 
 * init index to 1
 * start off with a while index < arr.length loop {
 * [...]
 * 
 * }
 * 
 */

function balancedSum(arr) {
  let i = 1

  if (
    arr.slice(0, i).reduce((x, y) => x + y) ===
    arr.slice(i + 1, arr.length).reduce((x, y) => x + y)
  ) {
    return i
  }
  i++
}
balancedSum([ 1, 2, 3, 3 ])
