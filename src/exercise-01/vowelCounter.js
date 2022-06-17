function vowelCounter(word) {
    const occurrences = word.match(/[aeiou]/gi);
    return occurrences?.length || 0;
}

export default vowelCounter;
