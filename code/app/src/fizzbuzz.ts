const getFizzBuzzValue = (i: number): string => {
  if (i % 3 === 0 && i % 5 === 0) {
    return 'FizzBuzz'
  }
  if (i % 3 === 0) {
    return 'Fizz'
  }
  if (i % 5 === 0) {
    return 'Buzz'
  }
  return `${i}`
}

export const generateFizzBuzz = (n: number): string[] => {
  return new Array(n).fill(0).map((_, i) => getFizzBuzzValue(i + 1))
}