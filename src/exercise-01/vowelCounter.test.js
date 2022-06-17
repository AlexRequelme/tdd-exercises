import vowelCounter from "./vowelCounter";

describe("Function that takes a string, and return the number of vowels", () => {
    test("Should count 0 with an empty string", () => {
        expect(vowelCounter("")).toBe(0);
    });
    test("The string contains a single vowel and no consonants", () => {
        expect(vowelCounter("a")).toBe(1);
    });
    test("The string contains multiple vowels and no consonants", () => {
        expect(vowelCounter("aaaeu")).toBe(5);
    });
    test("A string that contains multiple vowels and consonants", () => {
        expect(vowelCounter("hello friend")).toBe(4);
    });
    test("A string that contains both upper and lower case characters", () => {
        expect(
            vowelCounter("A Quick broWN FOX JUmped over the LAZY DOG.")
        ).toBe(12);
    });
});
