// This is provided in the ESPN API but if it can be calculated why flood their backend with my calls

export const yardsPerAttempt = (total: string, yards: string) => {
  const percentage = Number(yards) / Number(total)
  console.log(percentage)
  const decimal = String(percentage).indexOf('.')
  const decimalOverflow = String(percentage).substring(
    decimal + 3,
    String(percentage).length
  )
  console.log(decimalOverflow)
  return String(percentage).replace(decimalOverflow, '')
}
