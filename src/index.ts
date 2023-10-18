const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1)

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
