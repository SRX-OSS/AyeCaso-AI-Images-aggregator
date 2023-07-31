export const throttleFunction = (func: any, delay: number) => {
  let prev = 0;
  return (...args: any) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

export const debounce = function (func: any, delay: number) {
  let debounceTimer: NodeJS.Timeout | undefined;
  return (...args: any) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func(args), delay);
  };
};

export function mergeAndSortById(mergedArray: any) {
  // Create an object to keep track of the number of occurrences of each id
  const idCounts: any = {};
  mergedArray.forEach((item: any) => {
    if (idCounts[item.id]) {
      idCounts[item.id]++;
    } else {
      idCounts[item.id] = 1;
    }
  });

  // Remove duplicates by creating a new array with unique ids
  const uniqueArray: any = [
    ...new Set(mergedArray?.map((item: any) => item.id)),
  ].map((id) => {
    return { id, ...mergedArray?.find((item: any) => item.id === id) };
  });

  // Sort the unique array in descending order of the number of occurrences of each id
  uniqueArray.sort((a: any, b: any) => idCounts[b.id] - idCounts[a.id]);

  return uniqueArray;
}

export function divideArray(arr: any[], division: number) {
  let result = [];
  for (let i = 0; i < arr.length; i += division) {
    result.push(arr.slice(i, i + division));
  }
  return result;
}
