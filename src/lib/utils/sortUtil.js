const alphabeticalSort = (arr, sortBy) => arr.sort((a, b) => {
  if (a[sortBy] < b[sortBy]) {
    return -1;
  }
  if (a[sortBy] > b[sortBy]) {
    return 1;
  }
  return 0;
});

export { alphabeticalSort };
