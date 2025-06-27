// @ts-check

const asan = [ 40.413639, 49.855376 ]

export const code = (
    /** @type { number } */ x, 
    /** @type { number } */ y,
    ) => {

    const relative_x = x - asan[0]
    const relative_y = y - asan[1]

    const int_relative_x = Math.floor(relative_x * 10 ** 4)
    const int_relative_y = Math.floor(relative_y * 10 ** 4)

    const negatived_x = 
        int_relative_x < 0 ?
        Math.abs(int_relative_x) * 2 + 1 : 
        Math.abs(int_relative_x) * 2

    const negatived_y = 
        int_relative_y < 0 ?
        Math.abs(int_relative_y) * 2 + 1 : 
        Math.abs(int_relative_y) * 2

    const xcode = negatived_x.toString(36)
    const ycode = negatived_y.toString(36)

    return [ xcode, ycode ]

}

export const decode = (
    /** @type { string } */ xcode, 
    /** @type { string } */ ycode,
    ) => {
    const negatived_x = parseInt(xcode, 36)
    const negatived_y = parseInt(ycode, 36)

    const int_relative_x = 
        negatived_x % 2 ? 
        -(negatived_x - 1) / 2 :
        negatived_x / 2
    const int_relative_y = 
        negatived_y % 2 ? 
        -(negatived_y - 1) / 2 :
        negatived_y / 2

    const relative_x = int_relative_x / 10 ** 4
    const relative_y = int_relative_y / 10 ** 4

    const x = relative_x + asan[0]
    const y = relative_y + asan[1]

    return [ x, y ]

}

//console.log(code(40.412002, 49.845089).map(k => k.toString(36))) // [ '-h', '-2v' ]
//console.log(code(40.343327, 49.801473).map(k => k.toString(36))) // [ '-h', '-2v' ]
//console.log(code(40.495832, 50.172797).map(k => k.toString(36))) // [ 'mt', '2g6' ]


//const coded = code(40.412002, 49.845089).map(k => k.toString(36))

//const input = [ 40.365611, 49.851789 ]
//const coded = code(...input)
//const decoded = decode(...coded)
//
//console.log(input)
//console.log(decoded)
//console.log(input[0] - decoded[0])
//console.log(input[1] - decoded[1])

//console.log(code(40.4122717, 49.8440927).map(k => k.toString(36))) // t.6b
console.log(decode("jw", "yr")) // t.6b
console.log(code(-43.530159, -67.200402))


