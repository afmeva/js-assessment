recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    const dirsBrowsed = [];
    if (Array.isArray(data)) {
      return data;
    }

    const dive = (dirs = []) => {
      const [head, ...tail] = dirs;

      if (!head) {
        return [];
      }

      dirsBrowsed.push(head.dirName);
      if (!dirName) {
        return [...head.files, ...dive(head.subDirs), ...dive(tail)];
      }

      if (dirsBrowsed.includes(head.dirName)) {
        return [...head.files, ...dive(head.subDirs)];
      }
      dirsBrowsed.pop(head.dirName);
      return [];
    };

    return dirName
      ? dive(data.subDirs)
      : [...data.files, ...dive(data.subDirs)];
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   *
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   *
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    let a = 0;
    let b = 1;

    const calc = n => {
      if (n <= 0) {
        return b;
      }
      const c = a + b;
      a = b;
      b = c;

      return calc(n - 1);
    };

    return calc(n - 1);
  }
};
