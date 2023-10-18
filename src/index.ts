/**
 * Capitalizes the first letter of a string.
 * @param word the word to capitalize
 * @returns the capitalized word
 */
const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1)

/**
 * Capitalizes the first letter of each word in a string.
 * @param input The string to title case.
 * @param exclusion A space-separated list of words to exclude from title casing.
 * @returns The title cased string.
 */
export const titleCase = (input: string, exclusion: string) => {
  const exclusions = exclusion.split(' ').map((w) => w.toLowerCase())

  return input
    .split(' ')
    .map((word) => {
      if (exclusions.includes(word)) {
        return word
      }

      return capitalize(word)
    })
    .join(' ')
}
