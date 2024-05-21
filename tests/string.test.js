import { reverseString } from "../src/string";

describe("String functions", () => {
  test('reverses "hello" to "olleh"', () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test.skip('reverses "jest" to "tsej"', () => {
    expect(reverseString("jest")).toBe("tsej");
  });
});
