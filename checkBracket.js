const closeBracket = (openingBracket) => {
    switch (openingBracket) {
        case '(':
            return ')'
        case '[':
            return ']'
        case '{':
            return '}'
    }
}

const checkBracket = (bracket) => {
    if (bracket.length % 2 === 1 || bracket.length === 0) {
        return false
    }
    else {
        if (bracket[bracket.length / 2 - 1] === '(' && bracket[bracket.length / 2] === ')' || 
        bracket[bracket.length / 2 - 1] === '[' && bracket[bracket.length / 2] === ']' ||
        bracket[bracket.length / 2 - 1] === '{' && bracket[bracket.length / 2] === '}') {
            let firstChar = ''
            while (bracket.length !== 0) {
                if (bracket.indexOf('(') !== -1 && bracket.indexOf('(') < bracket.indexOf(')') ||
                bracket.indexOf('[') !== -1 && bracket.indexOf('[') < bracket.indexOf(']') ||
                bracket.indexOf('{') !== -1 && bracket.indexOf('{') < bracket.indexOf('}')) {
                    firstChar = bracket[0]
                    bracket = bracket.replace(firstChar, '')
                    bracket = bracket.replace(closeBracket(firstChar), '')
                }
                else {
                    return false
                }
            }
            return true
        }
        else {
            return false
        }
    }
}

console.log(checkBracket('(){}[]'))