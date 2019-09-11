/**
 * Return a random integer from minarg (inclusive) to max (inclusive)
 * @param {number} max - maximum(inclusive)
 * @param {number} minArg - minimum(inclusive)
 * @return {number} - the random integer
 */
export function randomInt(max, minArg) {
  const min = minArg || 0;
  return Math.floor((Math.random() * ((max - min) + 1)) + min);
}

/**
 * Return a random seed based on Math.random()
 * @return {number} - the random seed
 */
export function randomSeed() {
  return Math.floor(Math.random() * 10000000000);
}

/**
 * Return a random choice from an array
 * @param {Object} choices - choices to select from
 * @return {Object} - the chosen element
 */
export function randomChoice(choices) {
  return choices[randomInt(choices.length - 1)];
}

/**
 * Return a random choice from an array of objects with weights
 * @param {Object} options - choices to select from
 * @return {Object} - the chosen element
 */
export function chooseWeighted(options) {
  let total = 0;
  for (let i = 0; i < options.length; i += 1) {
    total += options[i].weight || 1;
  }
  let target = Math.floor((Math.random() * total) + 1);
  let index = 0;
  target -= options[0].weight || 1;
  while (target > 0) {
    index += 1;
    target -= options[index].weight || 1;
  }
  return options[index].value || options[index];
}

/**
 * Return a seeded random number between 0 and 1
 * @param {number} seed - seed for random selection
 * @return {number} - result between 0 and 1
 */
export function sRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

/**
 * Return a seeded random integer
 * @param {number} seedArg - random seed
 * @param {number} max - exclusive maximum
 * @param {number} minArg - optional inclusive minimum, defaults to 0
 * @return {number}
 */
export function sRandomInt(seedArg, max, minArg) {
  const seed = seedArg || randomSeed();
  const min = minArg || 0;
  return min + Math.floor(sRandom(seed) * (max - min));
}

// http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript
/**
 * Capitalize the first character of a string
 * @param {string} string - string to be captialized
 * @return {string} - string with capitalization
 */
export function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
