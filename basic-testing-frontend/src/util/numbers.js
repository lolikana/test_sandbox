export function transformToNumber(value) {
  // if (isNaN(+value)) throw new Error('Not a numeric string or number');

  // could pass the test .toBeTypeOf("number")
  // return NaN

  return +value;
}
