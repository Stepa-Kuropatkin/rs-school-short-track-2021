/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const namesArr = [...names];
  let a = 0;
  let prev;

  for (let i = 0; i < namesArr.length; i++) {
    if (namesArr.indexOf(namesArr[i]) !== names.lastIndexOf(namesArr[i])) {
      if (namesArr[i] === prev) a = 1;
      if (a > 0) namesArr[i] += `(${a})`;
      prev = namesArr[i];
      a++;
    }
  }
  return namesArr;
}

module.exports = renameFiles;
