// Функция, которая возвращает закрывающую скобку
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

// Функция на проверку правильности строки из скобок
const checkBracket = (bracket) => {
    // В случае если в строке не четное количество скобок или строка пустая, сразу же возвращаем false
    if (bracket.length % 2 === 1 || bracket.length === 0) {
        return false
    }
    else {
        // Создаем цикл, который работает, пока строка из скобок не пустая (при каждой итерации удаляется 2 символа)
        while (bracket.length !== 0) {
            // Проверка, существуют ли вообще открывающая скобка, и если да, то написана ли она раньше закрывающей 
            // (в случае если закрывающей не существует, то вернется индекс -1, что меньше даже самого первого символа)
            if (bracket.indexOf('(') !== -1 && bracket.indexOf('(') < bracket.indexOf(')') ||
            bracket.indexOf('[') !== -1 && bracket.indexOf('[') < bracket.indexOf(']') ||
            bracket.indexOf('{') !== -1 && bracket.indexOf('{') < bracket.indexOf('}')) {
                // Удаляем первую закрывающую скобку первой скобки в строке
                bracket = bracket.replace(closeBracket(bracket[0]), '')
                // Удаляем самую первую скобку в строке
                bracket = bracket.replace(bracket[0], '')
            }
            // Если в результате итераций получилась несиммеричная строка, возвращаем false и останавливается цикл
            else {
                return false
            }
        }
        // В случае если цикл пройден и строка пустая, возвращаем true
        return true
    }
}

console.log(checkBracket('()()'))