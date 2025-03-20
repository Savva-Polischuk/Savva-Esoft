// Оригинальный объект для копирования
const originalObject = {
    a: 'a',
    b: {
        c: 'c'
    },
    d: {
        e: {
            f: 'f'
        }
    },
    g: undefined,
    h: null,
    i: () => { console.log('abc') }
}

// Оригинальный массив для копирования
const originalArray = [
    'a', 
    ['b', 'c'],
    [['d', 'e'], ['f', 'g']]
]

// Функция для глубокого копирования объектов
const copyObject = (obj) => {
    // Создание пустого экзепляра на основе типа оригинального объекта
    let copy = Object.getPrototypeOf(obj).constructor()

    // итерационная функция (для рекурсии)
    const iter = (object) => {
        // Проходимся по всем элементам и достаем ключи 
        for (let key in object) {
            // Проверка является ли элемент вложенным объектом (Map, Set, Array, Date - также попадают под эту проверку, кроме Null) 
            if (typeof object[key] === 'object' && object[key] !== null) {
                // Проверка является ли объект ссылкой на родительский объект (во избежание бесконечной рекурсии)
                if (obj[key] === obj) {
                    // Присваеваем ссылку на родителя (при дальнейших изменениях объекта его рекурсивное свойство также поменяется)
                    copy[i] = copy
                }
                else {
                    // в случае, если это отдельный объект, то добавляем ключ к копии, а для значения вызываем рекурсию
                    Object.defineProperty(copy, key, {value: copyObject(object[key]), writable : true, enumerable : true, configurable : true })
                }
            }
            // В случае, если итерационный элемент не объект, просто добавляем его в копию
            else {
                Object.defineProperty(copy, key, {value: object[key], writable : true, enumerable : true, configurable : true })
            }
        }
    }
    // Вызов итерационной функции
    iter(obj)
    // возвращаем копию
    return copy
}

// Глубокое копирование объекта
const cloneObject = copyObject(originalObject)
// const cloneArray = copyObject(originalArray)

// Изменение клона для проверки глубокого копирования (оригинал не должен поменятся)
cloneObject.d.e.f = 'char'
// cloneArray[2][1][1] = 'char'


// Вывод обоих объектов
console.log(cloneObject)
console.log(originalObject)

