export const yardsPerAttempt = (total: string, yards: string) => {
    const percentage = (Number(yards) / Number(total))
    const decimal = String(percentage).indexOf('.')
    const decimalOverflow = String(percentage).substring(decimal + 3, String(percentage).length)
    console.log(decimalOverflow)
    return String(percentage).replace(decimalOverflow, '')
}