module.exports = {
    preset: 'ts-jest',
    moduleFileExtensions: ['ts', 'js'],
    transform: {
        '^.+\\/ts$': 'ts-jest',
    },
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
    testMatch: ['**/*.test.ts'],
}
