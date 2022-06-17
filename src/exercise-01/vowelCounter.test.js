import vowelCounter from "./vowelCounter";

describe("Function that takes a string, and return the number of vowels", () => {
    test("Should count 0 with an empty string", () => {
        expect(vowelCounter("")).toBe(0);
    });
    test("The string contains a single vowel and no consonants", () => {
        expect(vowelCounter("a")).toBe(1);
    });
    test("The string contains multiple vowels and no consonants", () => {
        const input = "abcd";
        expect(vowelCounter(input)).toBe(input.length);
    });
});
