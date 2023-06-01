export const alphabetShift = (arr: string[], shift: number): string[] => {
  if (arr.length === 0) {
    return [];
  }

  const [first, ...rest] = arr;
  let shiftedLetter = '';

  if (/^[a-yA-Y]+$/.test(first)) {
    shiftedLetter = String.fromCharCode(first.charCodeAt(0) + shift);
  } else if (/^[Z]+$/.test(first)) {
    if (shift === 1) shiftedLetter = 'A';
    shiftedLetter = String.fromCharCode('A'.charCodeAt(0) + (shift - 1));
  } else if (/^[z]+$/.test(first)) {
    if (shift === 1) shiftedLetter = 'a';
    shiftedLetter = String.fromCharCode('a'.charCodeAt(0) + (shift - 1));
  } else {
    shiftedLetter = first;
  }

  return [shiftedLetter, ...alphabetShift(rest, shift)];
};
