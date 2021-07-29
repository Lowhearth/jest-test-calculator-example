const {
  sumDigits,
  alphabeticalComparator,
  orderWeight,
} = require('./calculator');

describe('Sum Digits tests', () => {
  const testCases = [
    ['32', 5],
    ['91', 10],
    ['100', 1],
    ['88', 16],
  ];

  testCases.forEach(([input, expectedOutput]) => {
    it(`return ${expectedOutput} when called with ${input}`, () => {
      const result = sumDigits(input);
      expect(result).toBe(expectedOutput);
    });
  });
});

describe('Alphabetical Comparator tests', () => {
  const testCases = [
    ['32', '41', -1],
    ['41', '32', 1],
    ['23', '14', 1],
    ['23', '32', -1],
    ['10', '10', 0],
  ];

  testCases.forEach(([input1, input2, expectedOutput]) => {
    it(`return ${expectedOutput} when called with ${input1}, ${input2}`, () => {
      const result = alphabeticalComparator(input1, input2);
      expect(result).toBe(expectedOutput);
    });
  });
});

describe('orderWeight tests', () => {
  const input = '103 123 4444 99 2000';
  const output = '2000 103 123 4444 99';
  it(`return ${output} when called with ${input}`, () => {
    const result = orderWeight(input);
    expect(result).toBe(output);
  });
});
