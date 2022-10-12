export const getYardsPerAttempt = (total: string, yards: string) => {
    const percentage = (Number(yards) / Number(total))
    console.log(percentage)
    const decimal = String(percentage).indexOf('.')
    const decimalOverflow = String(percentage).substring(decimal + 3, String(percentage).length)
    console.log(decimalOverflow)
    return String(percentage).replace(decimalOverflow, '')
}