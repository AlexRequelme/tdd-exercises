export class Rider {
    distance;
    time;

    constructor(distance, time) {
        this.distance = distance;
        this.time = time;
    }
}

function taximeter(riders) {
    const FARE_PER_KM = 10;
    const FARE_PER_MINUTE = 1;
    return riders.reduce((acum, r) => {
        acum += r.distance * FARE_PER_KM + r.time * FARE_PER_MINUTE;
        return acum;
    }, 0);
}

export default taximeter;
