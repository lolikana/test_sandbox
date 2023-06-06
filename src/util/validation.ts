import { ValidationError } from './errors.js';

export function validateNotEmpty(text: string | null, errorMessage: string) {
  if (!text || text.trim().length === 0) {
    throw new ValidationError(errorMessage);
  }
}
