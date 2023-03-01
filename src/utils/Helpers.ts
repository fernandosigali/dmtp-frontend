
export const isInt = (stringNumber: string) => {
    let intNumber = parseInt(stringNumber)
    if (!isNaN(intNumber)) {
        return true
    }
    return false
}
