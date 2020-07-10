export const parseCSV = (f) => {
  let r = new FileReader();

  r.onload = () => {
    const strings = r.result.split('\n');
    console.log(strings);
    const groups = groupByPrefix(strings);
    console.log(groups);
  };

  r.readAsBinaryString(f);
};

export const groupByPrefix = (strings) => {
  return ({
    group1: ['word1', 'word2'],
    group2: ['word3', 'word4', 'word5'],
    group3: ['word6', 'word7']
  });
};