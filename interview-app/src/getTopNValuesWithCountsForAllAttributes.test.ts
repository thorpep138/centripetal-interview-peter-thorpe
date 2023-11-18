import { getTopNValuesWithCountsForAllAttributes } from './getTopNValuesWithCountsForAllAttributes';

const intelligence = [
  {
    ioc: '1.2.3.4',
    threat: 'low',
    countryCode: 'us',
    seenBy: ['usSS', 'whiteHatsAnon'],
    lastSeen: 1650309845083,
  },
  {
    ioc: '1.2.3.5',
    threat: 'high',
    countryCode: 'us',
    seenBy: ['usSS'],
    lastSeen: 1650307825088,
  },
  {
    ioc: 'gougle.com',
    threat: 'high',
    countryCode: 'ca',
    seenBy: ['usSS', 'whiteHatsAnon', 'ruWatch', 'privateInc', 'angiesList'],
    lastSeen: 1650609845087,
  },
  {
    ioc: 'goople.com',
    threat: 'high',
    countryCode: 'ru',
    seenBy: ['usSS', 'whiteHatsAnon', 'angiesList'],
    lastSeen: 1650109815283,
  },
];

describe('getTopNValuesWithCountsForAllAttributes', () => {
  it('should return the top 3 values with counts for all attributes', () => {
    
    const result = getTopNValuesWithCountsForAllAttributes(intelligence, 3);

    const expectedOutput = 
      `{` + '\n'  
          + '    threat: { high: 3, low: 1 }' + '\n' 
          + '    countryCode: { us: 2, ca: 1, ru: 1 }' + '\n'
          + '    seenBy: { [usSS,whiteHatsAnon]: 1, [usSS]: 1, [usSS,whiteHatsAnon,ruWatch,privateInc,angiesList]: 1 }' + '\n'
          + '    lastSeen: { 1650309845083: 1, 1650307825088: 1, 1650609845087: 1 }' + '\n' + '}';

    expect(result).toEqual(expectedOutput);
  });

  it('should return the top 2 values with counts for all attributes', () => {
    const result = getTopNValuesWithCountsForAllAttributes(intelligence, 2);

    const expectedOutput = 
      `{` + '\n'  
          + '    threat: { high: 3, low: 1 }' + '\n' 
          + '    countryCode: { us: 2, ca: 1 }' + '\n'
          + '    seenBy: { [usSS,whiteHatsAnon]: 1, [usSS]: 1 }' + '\n'
          + '    lastSeen: { 1650309845083: 1, 1650307825088: 1 }' + '\n' + '}';

    expect(result).toEqual(expectedOutput);
  });

  it('should return the top 1 value with counts for all attributes', () => {
    const result = getTopNValuesWithCountsForAllAttributes(intelligence, 1);

    const expectedOutput = 
      `{` + '\n'  
          + '    threat: { high: 3 }' + '\n' 
          + '    countryCode: { us: 2 }' + '\n'
          + '    seenBy: { [usSS,whiteHatsAnon]: 1 }' + '\n'
          + '    lastSeen: { 1650309845083: 1 }' + '\n' + '}';

    expect(result).toEqual(expectedOutput);
  });
});
