/* @flow */
const maskString = (str: string, mask: string) => {
  const tokens = {
    '0': { pattern: /\d/ }
  }
  const checkMaskLeftover = (start, mask, char) => {
    for (let i = start; i < mask.length && i < start + 2; i++) {
      const mChar = mask[i]
      if ((tokens[mChar] && tokens[mChar].pattern.test(char)) || mChar === char) {
        return true
      }
    }
    return false
  }
  let maskedString = ''
  let sChar = 0
  let mChar = 0
  while (mChar < mask.length && sChar < str.length) {
    const token = tokens[mask[mChar]]
    if (token) {
      if (token.pattern.test(str[sChar])) {
        maskedString += str[sChar]
        sChar ++
        mChar ++
      } else {
        sChar ++
      }
    } else {
      if (mask[mChar] === str[sChar]) {
        maskedString += mask[mChar]
        sChar ++
        mChar ++
      } else if (sChar !== str.length - 1) {
        // Check if it is not a last character in str
        maskedString += mask[mChar]
        mChar ++
      } else { // if it is a last character in string, we need to check mask to the end
        if (checkMaskLeftover(mChar, mask, str[sChar])) {
          maskedString += mask[mChar]
          mChar++
        } else {
          sChar++
        }
      }
    }
  }
  return maskedString
}

export default maskString
