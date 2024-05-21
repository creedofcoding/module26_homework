import { sum, multiply } from "../src/math";

describe.skip("Math functions", () => {
  test("adds 1 + 2 to equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  test("multiply 1 * 2 to equal 2", () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });
});
