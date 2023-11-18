type StringToNumberMap = Map<string, number>;

function buildAttributesMap(objects: Record<string, any>[]): Map<string, StringToNumberMap> {
  const attributes: Map<string, StringToNumberMap> = new Map();

  objects.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      let value = obj[key];
      const valueString = Array.isArray(value) ? '[' + value.toString() + ']' : value.toString();

      if (!attributes.has(key)) {
        attributes.set(key, new Map<string, number>());
      }

      const stringToNumberMap = attributes.get(key)!;

      if (stringToNumberMap.has(valueString)) {
        stringToNumberMap.set(valueString, stringToNumberMap.get(value)! + 1);
      } else {
        stringToNumberMap.set(valueString, 1);
      }
    });
  });

  return attributes;
}

export function getTopNValuesWithCountsForAllAttributes(
  objects: Record<string, any>[],
  n: number,
): string {
  const attributesMap = buildAttributesMap(objects);
  let outputString = '';

  outputString += '{' + '\n';
  attributesMap.forEach((stringToNumberMap, attribute) => {
    if (attribute !== 'ioc') {
      const sortedValues = [...stringToNumberMap.entries()].sort((a, b) => b[1] - a[1]);
      const topNValues = sortedValues.slice(0, n);
      const commaSeparatedValueCountPairs = topNValues.map(([value, count]) => `${value}: ${count}`).join(', ');
      outputString += `    ${attribute}: { ${commaSeparatedValueCountPairs} }` + '\n';
    }
  });

  outputString += '}';

  return outputString;
}
