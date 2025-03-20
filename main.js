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

const originalArray = [
    'a', 
    ['b', 'c'],
    [['d', 'e'], ['f', 'g']]
]

const copyObject = (obj) => {
    let copy = Object.getPrototypeOf(obj).constructor()

    const iter = (object) => {
        for (let key in object) {
            if (typeof object[key] === 'object' && object[key] !== null) {
                console.log(key, object[key])
                if (obj[key] === obj) {
                    copy[i] = copy
                }
                else {
                    Object.defineProperty(copy, key, {value: copyObject(object[key]), writable : true, enumerable : true, configurable : true })
                }
            }
            else {
                Object.defineProperty(copy, key, {value: object[key], writable : true, enumerable : true, configurable : true })
            }
        }
    }
    iter(obj)
    return copy
}

const cloneObject = copyObject(originalObject)
// const cloneArray = copyObject(originalArray)

cloneObject.d.e.f = 'char'
// cloneArray[2][1][1] = 'char'

console.log(cloneObject)
console.log(originalObject)

