const parseUtils = require('./parseUtils');

test('groupByPrefix() returns a non-null object when passed a list of strings', () => {
  const result = parseUtils.groupByPrefix(['string_1', 'string_2', 'string_3']);
  expect(
    (typeof result === 'object' && result !== null)).toBe(true);
});

test('groupByPrefix() returns an object containing array values', () => {
  const result = parseUtils.groupByPrefix(['prefix1_word1', 'prefix1_word2', 'prefix2_word1', 'prefix2_word2']);
  const values = Object.values(result);
  expect(
    (values.every((v) => (Array.isArray(v))))).toBe(true);
});
