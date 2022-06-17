import taximeter, { Rider } from "./taximeter";

describe("Calculate the cost of taxi journey", () => {
    test("Distance and time is 0", () => {
        const riders = [new Rider(0, 0), new Rider(0, 0)];
        const result = taximeter(riders);
        expect(result.numRides).toBe(riders.length);
        expect(result.totalFare).toBe(0);
        expect(result.averageFare).toBe(0 / riders.length);
    });
    test("Distance is 0 and time more than 0", () => {
        const riders = [new Rider(0, 9), new Rider(0, 9)];
        const result = taximeter(riders);
        expect(result.numRides).toBe(riders.length);
        expect(result.totalFare).toBe(18);
        expect(result.averageFare).toBe(18 / riders.length);
    });
    test("Distance is more than 0 and time is 0", () => {
        const riders = [new Rider(9, 0), new Rider(9, 0)];
        const result = taximeter(riders);
        expect(result.numRides).toBe(riders.length);
        expect(result.totalFare).toBe(180);
        expect(result.averageFare).toBe(180 / riders.length);
    });
    test("Distance and time is more than 0", () => {
        const riders = [new Rider(9, 9), new Rider(9, 9)];
        const result = taximeter(riders);
        expect(result.numRides).toBe(riders.length);
        expect(result.totalFare).toBe(198);
        expect(result.averageFare).toBe(198 / riders.length);
    });
});
