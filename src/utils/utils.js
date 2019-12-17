/**
 * Return a random integer.
 * @param {number} max - maximum(inclusive).
 * @param {number} min - minimum(inclusive).
 * @returns {number} - The random integer.
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

/**
 * Return a seeded random number between 0 and 1.
 * @param {number} seed A seed.
 * @returns {number} A number from 0 to 1.
 */
export function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

/**
 * Return a seeded random number between 0 and 1.
 * @param {number} seed A seed.
 * @param {number} max - maximum(inclusive).
 * @param {number} min - minimum(inclusive).
 * @returns {number} - The random integer.
 */
export function seededRandomInt(seed, max, min = 0) {
  return Math.floor((seededRandom(seed) * ((max - min) + 1))
    + min);
}
