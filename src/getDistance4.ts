/**
 * ある画素を中心(0, 0)としたとき、周囲9画素を表した座標(x, y)の配列
 * ```
 *  -------
 * | 4 3 2 |
 * | 5 0 1 |
 * | 6 7 8 |
 *  -------
 * ```
 */
const miniarea = [
    [0, 0],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
] as const

/**
 * 二値画像に対して4近傍の距離変換を行う。
 * 第一引数に二値画像でないものが渡された場合は例外を投げる。
 *
 * 二値画像の距離変換とは、ある二値画像の各画素について、0となる画素への最短距離を求める操作です。
 * 距離変換では、ひとかたまりの図形の中心へ向かうほど高い値となります。
 * 距離変換は、画像の骨格を求める際に使われます。
 *
 * @param binImage 二値画像
 * @param width 画像の幅
 * @param height 画像の高さ
 * @returns 距離変換画像
 */
export const getDistance4 = (
    binImage: number[][],
    width: number,
    height: number
): number[][] => {
    //幅width、高さheightの画像を表す二次元配列 (0埋め)
    const dist = Array.from(Array(width), () => Array<number>(height).fill(0))

    // 上方向からの走査
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (binImage[x][y] > 1) {
                throw new Error(
                    'Invalid Argument Error: The first argument should be a binary image'
                )
            }
            if (binImage[x][y] === 1) {
                // 対象画素の距離を、対象画素の上、または左の画素のどちらか小さい方の距離+1のにする
                const fks = [3, 5]
                    .map((k) => miniarea[k])
                    .map(([ox, oy]) => dist[x + ox]?.[y + oy] || 0)
                    .map((fk) => fk + 1)
                dist[x][y] = Math.min(...fks)
            } else {
                // 画素が0のときは距離を0にする
                dist[x][y] = 0
            }
        }
    }

    // 下方向からの走査
    for (let y = height - 1; y >= 0; y--) {
        for (let x = width - 1; x >= 0; x--) {
            if (binImage[x][y] === 1) {
                // 対象画素の距離を、対象画素の下、または右の画素のどちらか小さい方の距離+1のにする
                const fks = [1, 7]
                    .map((k) => miniarea[k])
                    .map(([ox, oy]) => dist[x + ox]?.[y + oy] || 0)
                    .map((fk) => fk + 1)
                dist[x][y] = Math.min(dist[x][y], ...fks)
            } else {
                // 画素が0のときは距離を0にする
                dist[x][y] = 0
            }
        }
    }
    return dist
}
