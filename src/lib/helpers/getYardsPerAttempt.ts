// This is provided in the ESPN API but if it can be calculated why flood their backend with my calls

export const yardsPerAttempt = (total: string, yards: string) => {
  const percentage = Number(yards) / Number(total)
  const decimal = String(percentage).indexOf('.')
  const decimalOverflow = String(percentage).substring(
    decimal + 3,
    String(percentage).length
  )
  return String(percentage).replace(decimalOverflow, '')
}
