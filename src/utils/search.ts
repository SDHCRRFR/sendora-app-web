/** Match every search term, ignoring accents, case and common separators. */
export function matchesSearch(query: string, values: string[]): boolean {
  const normalize = (value: string) =>
    value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[’'\-–—]/g, ' ')
      .trim()
  const terms = normalize(query).split(/\s+/).filter(Boolean)
  const content = normalize(values.join(' '))
  return terms.every((term) => content.includes(term))
}
