const sum = require('./sum');

it('calculates 1 + 2', () => {
  // expect: 예상하다
  expect(sum(1, 2)).toBe(3);
})