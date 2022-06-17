import taximeter, { Rider } from "./taximeter";

describe("Calculate the cost of taxi journey", () => {
    test("Distance and time is 0", () => {
        const riders = [new Rider(0, 0), new Rider(0, 0)];
        expect(taximeter(riders)).toBe(0);
    });
    test("Distance is 0 and time more than 0", () => {
        const riders = [new Rider(0, 9), new Rider(0, 9)];
        expect(taximeter(riders)).toBe(18);
    });
    test("Distance is more than 0 and time is 0", () => {
        const riders = [new Rider(9, 0), new Rider(9, 0)];
        expect(taximeter(riders)).toBe(180);
    });
    test("Distance and time is more than 0", () => {
        const riders = [new Rider(9, 9), new Rider(9, 9)];
        expect(taximeter(riders)).toBe(198);
    });
});
