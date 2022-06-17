function taximeter(distance, time) {
    const FARE_PER_KM = 10;
    const FARE_PER_MINUTE = 1;
    return distance * FARE_PER_KM + time * FARE_PER_MINUTE;
}

export default taximeter;
