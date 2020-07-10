const parseUtils = require('./parseUtils');

test('groupByPrefix() returns a non-null object when passed a list of strings', () => {
  const testInput = ['string_1', 'string_2', 'string_3'];
  const result = parseUtils.groupByPrefix(testInput);
  expect(
    (typeof result === 'object' && result !== null)).toBeTruthy();
});

test('groupByPrefix() returns an object containing array values', () => {
  const testInput = ['prefix1_word1', 'prefix1_word2', 'prefix2_word1', 'prefix2_word2'];
  const result = parseUtils.groupByPrefix(testInput);
  const values = Object.values(result);
  expect(
    (values.every((v) => (Array.isArray(v))))).toBeTruthy();
});

test('groupByPrefix() skips empty strings', () => {
  const testInput = ['string_1', '', 'string_2'];
  const result = parseUtils.groupByPrefix(testInput);
  const keys = Object.keys(result);
  expect(keys.includes('')).toBeFalsy();
});

test('each group name is equal to the first element in the group', () => {
  const testInput = ['prefix1_word1', 'prefix1_word2', 'prefix2_word1', 'prefix2_word2'];
  const result = parseUtils.groupByPrefix(testInput);
  const keys = Object.keys(result);
  expect(keys.every((k) => (k === result[k][0]))).toBeTruthy();
});
