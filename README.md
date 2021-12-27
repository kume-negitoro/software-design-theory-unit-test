## 二値画像の距離変換
これはソフトウェア設計論Iのユニットテストの課題として提出するために作成したリポジトリです。
リポジトリには二値画像に対する距離変換のソースコードが含まれています。

全てのソースはTypeScriptで記述しており、テストフレームワークにはJestを利用しています。

### 二値画像の距離変換とは
二値画像の距離変換とは、ある二値画像の各画素について、0となる画素への最短距離を求める操作です。
距離変換では、ひとかたまりの図形の中心へ向かうほど高い値となります。
距離変換は、画像の骨格を求める際に使われます。

4近傍の場合、距離変換は以下のような結果となります。

```input.json
[
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
]
```

```output.json
[
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 2, 1, 1, 1, 0, 0],
    [1, 2, 3, 2, 2, 1, 0, 0],
    [0, 1, 2, 1, 2, 2, 1, 0],
    [0, 1, 1, 0, 1, 2, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
]
```

### 環境
- Node.js v14.18.0
- Yarn v1.22.15
- TypeScript v4.5.2

### セットアップ
`$ yarn`

### 実行
動作確認
`$ yarn start`

テスト
`$ yarn test`

### エントリポイント
動作確認
`src/index.ts`

テスト
`src/*.test.ts`
