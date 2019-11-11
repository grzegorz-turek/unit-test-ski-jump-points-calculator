const calculateStylePoints = (styleNotes) => (styleNotes.reduce((acc, cur) => (acc + cur)) - Math.min(...styleNotes) - Math.max(...styleNotes));

module.exports = calculateStylePoints;

