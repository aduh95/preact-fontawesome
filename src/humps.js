/**
 * Removes any hypens, underscores, and whitespace characters, and uppercases the first character that follows.
 * @see https://github.com/domchristie/humps
 * @param {string} string
 * @returns {string} camelized string
 */
export function camelize(string) {
  if (typeof string !== 'string') {
    return string
  }
  string = string.replace(/[-_\s]+(.)?/g, function(match, chr) {
    return chr ? chr.toUpperCase() : ''
  })
  // Ensure 1st char is always lowercase
  return string.charAt(0).toLowerCase() + string.substring(1)
}
