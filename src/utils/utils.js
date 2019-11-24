/**
 * Return a random integer.
 * @param {Number} max - maximum(inclusive).
 * @param {Number} min - minimum(inclusive).
 * @returns {Number} - The random integer.
 */
export function randomInt(max, min = 0) {
  return Math.floor((Math.random() * ((max - min) + 1)) + min);
}

/**
 * Return a random choice from an Array.
 * @param {Array} choices - choices to select from.
 * @returns {Object} - the chosen element.
 */
export function randomChoice(choices) {
  return choices[randomInt(choices.length - 1)];
}
