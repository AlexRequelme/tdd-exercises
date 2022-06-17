const FARE_PER_KM = 10;
const FARE_PER_MINUTE = 1;

export class Rider {
    distance;
    time;

    constructor(distance, time) {
        this.distance = distance;
        this.time = time;
    }

    getFare() {
        return this.distance * FARE_PER_KM + this.time * FARE_PER_MINUTE;
    }
}

function taximeter(riders) {
    const totalFare = riders.reduce((acum, r) => {
        acum += r.getFare();
        return acum;
    }, 0);

    return {
        numRides: riders.length,
        totalFare,
        averageFare: totalFare / riders.length,
    };
}

export default taximeter;
