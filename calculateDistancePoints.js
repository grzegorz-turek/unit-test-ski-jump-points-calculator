const calculateDistancePoints = (distance, hillSize, kPoint) => {

  const calculateDistancePointsNormal = (((distance - kPoint) * 2) + 60);
  const calculateDistancePointsBig = (((distance - kPoint) * 1.8) + 60);
  const calculateDistancePointsMamooth = (((distance - kPoint) * 1.2) + 120);

  if (distance <= 0 || (!Number.isInteger(distance) && distance !== Number((Math.floor(distance).toString()).concat('.5')))) {
    return console.log('Inapropriate distance format; distance must be positive (+) integer or decimal fraction rounded to .5');
  }
  
  else if (kPoint <= 0 || !Number.isInteger(kPoint)) {
    return console.log('Inapropriate kPoint format; kPoint must be positive (+) integer');
  }
  
  else if (hillSize != 'nor' && hillSize != 'big' && hillSize != 'mam') {
    return console.log('Inapropriate hillSize input; hillSize must be \'nor\', \'big\' or \'mam\'');
  }
  
  else if (hillSize === 'nor') {
    return calculateDistancePointsNormal;
  }
  
  else if (hillSize === 'big') {
    return calculateDistancePointsBig;
  }
  
  else if (hillSize === 'mam') {
    return calculateDistancePointsMamooth;
  }
  
  else {
    console.log('Impossible happened');
  }

}

module.exports = calculateDistancePoints;  