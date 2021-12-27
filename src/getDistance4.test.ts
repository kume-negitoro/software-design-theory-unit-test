import { getDistance4 } from './getDistance4'

// Jest 27.4.5
// (ts-jest 27.1.2)

const testData = [
    {
        name: '中心が2になる',
        width: 6,
        height: 6,
        data: [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        correct: [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 2, 2, 1, 0],
            [0, 1, 2, 2, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0],
        ],
    },
    {
        name: '0の周りは1になる',
        width: 6,
        height: 6,
        data: [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        correct: [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 1, 0, 1, 0, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 0],
        ],
    },
    {
        name: '配列の領域外の画素は0として扱う',
        width: 3,
        height: 3,
        data: [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ],
        correct: [
            [1, 1, 1],
            [1, 2, 1],
            [1, 1, 1],
        ],
    },
    {
        name: 'より大きな例',
        width: 8,
        height: 8,
        data: [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
        correct: [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0],
            [0, 1, 2, 1, 1, 1, 0, 0],
            [1, 2, 3, 2, 2, 1, 0, 0],
            [0, 1, 2, 1, 2, 2, 1, 0],
            [0, 1, 1, 0, 1, 2, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ],
    },
]

const specialCase1 = {
    name: '二値画像が渡されない',
    width: 3,
    height: 3,
    data: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
    correct: undefined,
}

describe.each(testData)('getDistance4', ({ width, height, data, correct }) => {
    // 配列に含まれる距離は0以上の値である
    test('return value should be an array containing 0 or positive numbers', () => {
        const result = getDistance4(data, width, height).flat()
        for (const value of result) {
            expect(value).toBeGreaterThanOrEqual(0)
        }
    })

    // 各テストケースについて正解と一致する
    test('getDistance4(testImage<N>) and testImage<N>Distance4 should be same', () => {
        expect(getDistance4(data, width, height)).toEqual(correct)
    })
})

describe('getDistance4 special case', () => {
    // 第一引数は二値画像である (そうでない場合は Invalid Argument Error 例外を投げる)
    test('The first argument should be a binary image', () => {
        const { width, height, data } = specialCase1
        expect(() => getDistance4(data, width, height)).toThrow(
            'Invalid Argument Error: The first argument should be a binary image'
        )
    })
})
