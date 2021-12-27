import { getDistance4 } from './getDistance4'

const main = (): void => {
    const binImage = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ]

    console.log('Binary Image:')
    console.table(binImage)

    console.log()

    console.log('Distance Image:')
    console.table(getDistance4(binImage, 8, 8))
}

main()
