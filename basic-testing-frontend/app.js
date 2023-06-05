import { extractEnteredNumberValue } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { generateResulstText, outputResult } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberInputs = extractEnteredNumberValue(form);
  const result = calculateResult(numberInputs);
  const resultText = generateResulstText(result);
  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
