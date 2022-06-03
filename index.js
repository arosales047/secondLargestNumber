function secondLargestNumber(numbers) {
 let first = numbers[1]
  let second = 0;

  for (let i=0; i < numbers.length; i++) {
    if (numbers[i] > first) {
      second = first;
      first = numbers[i]
    }
    if (numbers[i] > second && numbers[i] < first) {
      second = numbers[i];
    }
  }
  return second
}



let nums = [1, 10, 20, 19, 8, 12, 30]
console.log(secondLargestNumber(nums))