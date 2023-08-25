function findMatching(array, string) {
    return array.filter((name) => name.toLowerCase() === string.toLowerCase());
}


function fuzzyMatch(source, testString) {
  return source.filter(
    (possibleMatch) =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  );
}

function matchName(array, driverName) {
  return array.filter(function (prop) {
    return prop.name === driverName;
  });
}

