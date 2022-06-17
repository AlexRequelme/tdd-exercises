import taximeter from "./taximeter";

describe("Calculate the cost of taxi journey", () => {
    test("Distance and time is 0", () => {
        expect(taximeter(0, 0)).toBe(0);
    });
    test("Distance is 0 and time more than 0", () => {
        expect(taximeter(0, 9)).toBe(9);
    });
    test("Distance is more than 0 and time is 0", () => {
        expect(taximeter(9, 0)).toBe(90);
    });
    test("Distance and time is more than 0", () => {
        expect(taximeter(9, 9)).toBe(99);
    });
});
