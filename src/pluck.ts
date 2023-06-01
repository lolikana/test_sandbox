export const pluck = (
  arr: { [key: string]: string | number }[],
  property: string
): (string | number)[] => {
  return arr.map(item => item[property]);
};
