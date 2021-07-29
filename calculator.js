const sumDigits = (numString) =>
  numString.split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);

// This function often used as a comparator, returns the alphabetical comparation of the arguments
const alphabeticalComparator = (num1, num2) => {
  if (num1 > num2) return 1;
  if (num2 > num1) return -1;
  return 0;
};

const orderWeight = (numberString) => {
  const numbers = numberString.split(' ');

  return numbers
    .sort((num1, num2) => {
      const num1DigitsSum = sumDigits(num1);
      const num2DigitsSum = sumDigits(num2);
      const comparatorResult = alphabeticalComparator(
        num1DigitsSum,
        num2DigitsSum
      );

      return comparatorResult !== 0
        ? comparatorResult
        : alphabeticalComparator(num1, num2);
    })
    .join(' ');
};

module.exports = {
  sumDigits,
  alphabeticalComparator,
  orderWeight,
};
