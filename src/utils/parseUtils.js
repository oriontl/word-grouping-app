export const parseCSV = (f) => {
  let r = new FileReader();
  return new Promise((resolve, reject) => {
    r.onerror = () => {
      r.abort();
      reject(new DOMException("Error loading file."));
    };

    r.onload = () => {
      const strings = r.result.split('\n');
      const groups = groupByPrefix(strings);
      resolve(groups);
    };

    r.readAsBinaryString(f);
  });
};

const groupByPrefix = (strings) => {
  return ({
    group1: ['word1', 'word2'],
    group2: ['word3', 'word4', 'word5'],
    group3: ['word6', 'word7']
  });
};