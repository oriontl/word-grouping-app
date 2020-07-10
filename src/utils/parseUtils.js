export const parseCSV = (f) => {
  let r = new FileReader();
  return new Promise((resolve, reject) => {
    r.onerror = () => {
      r.abort();
      reject(new DOMException('Error loading file.'));
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
  let groups = {};

  for (let s of strings) {
    s = s.trim();

    if (!s) {
      continue;
    }

    const prefix = s.split('_')[0];
    let found = false;

    for (const groupName of Object.keys(groups)) {
      if (groupName.length >= prefix.length && groupName.substring(0, prefix.length) === prefix) {
        groups[groupName].push(s);
        found = true;
        break;
      }
    }

    if (!found) {
      groups[s] = [s];
    }
  }

  return groups;
};