// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    expect(capitalize("test")).toBe("Test");
  });

  test("should capitalize a single letter", () => {
    expect(capitalize("b")).toEqual("B");
  });

  test("should handle strings with leading/trailing spaces", () => {
    expect(capitalize("   test   ")).toEqual("   test   ");
  });

  test("should return empty string for empty input", () => {
    expect(capitalize("")).toBe("");
  });
});

// @ FilterOddNumber
describe("FilterOddNumber", () => {
  test("should filter odd numbers from mixed positive and negative integers", () => {
    expect(filterOddNumber([-3, -2, -1, 0, 1, 2, 3])).toEqual([-2, 0, 2]);
  });

  test("should return empty array for an array with all odd numbers", () => {
    expect(filterOddNumber([-5, -3, -1, 1, 3, 5])).toEqual([]);
  });

  test("should return an empty array if all elements are negative odd numbers", () => {
    expect(filterOddNumber([-9, -7, -5, -3])).toEqual([]);
  });

  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });
});

// @ EpochDateToUTC
describe("EpochDateToUTC", () => {
  test("should return Sun, 07 Feb 2106 06:28:16 GMT", () => {
    expect(epochDateToUTC(4294967296)).toMatch("Sun, 07 Feb 2106 06:28:16 GMT");
  });
  test("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    expect(epochDateToUTC(0)).toEqual("Thu, 01 Jan 1970 00:00:00 GMT");
  });

  test("should return Sat, 13 Mar 2021 12:34:56 GMT", () => {
    expect(epochDateToUTC(1615637696)).toMatch("Sat, 13 Mar 2021");
  });

  test("should return Tue, 27 Nov 2018 18:45:30 GMT", () => {
    expect(epochDateToUTC(1543327530)).toMatch("Tue, 27 Nov 2018");
  });

});