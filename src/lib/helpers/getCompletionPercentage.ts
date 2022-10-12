// This is provided in the ESPN API but if it can be calculated why flood their backend with my calls

export const completionPercentage = (completions: string, total: string) => {
  const percentage = 100 * (Number(completions) / Number(total))
  const decimal = String(percentage).indexOf('.')
  const decimalOverflow = String(percentage).substring(
    decimal + 3,
    String(percentage).length
  )
  return String(percentage).replace(decimalOverflow, '')
}
