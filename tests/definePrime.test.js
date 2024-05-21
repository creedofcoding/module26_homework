import { definePrime } from "../src/definePrime";

describe("definePrime tests", () => {
  const simple_num = 17;
  const complex_num = 18;
  const invalid_num = 1001;

  test("Test for 17 to be expected as prime number", () => {
    expect(definePrime(simple_num)).toBe(`Число ${simple_num} - простое число`);
  });

  test("Test for 18 to be expected as complex number", () => {
    expect(definePrime(complex_num)).toBe(`Число ${complex_num} - составное число`);
  });

  test("Test for invalid number 1001", () => {
    expect(definePrime(invalid_num)).toBe("Данные неверны");
  });
});
