
/**
 * Calculates the average of an array of numbers.
 * @param {number[]} numbers
 * @returns {number}
 */
export function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const total = numbers.reduce((sum, number) => sum + number, 0);
  return total / numbers.length;
}

/**
 * Capitalizes the first letter of each word.
 * @param {string} text
 * @returns {string}
 */
export function capitalizeWords(text) {
  return text.replace(/\b[a-z]/gi, (letter) => letter.toUpperCase());
}
