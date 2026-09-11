# gitflow-sample
サンプルのToDoアプリ

Azure App Service (Node.js) 上で動作する TypeScript 製のシンプルな ToDo アプリです。
Express + EJS によるサーバーサイドレンダリングで構成しています。

## 起動方法

```bash
npm install

# 開発(ファイル変更で自動再起動)
npm run dev

# 本番相当(TypeScript をビルドして起動)
npm run build
npm start
```

ブラウザで http://localhost:3000 を開きます。

ポートは環境変数 `PORT` で変更できます(Azure App Service では自動的に設定されます)。

## 構成

- `src/server.ts` - Express サーバー
- `src/todos.ts` - ToDo データ(インメモリ)
- `src/types.ts` - 型定義
- `views/index.ejs` - 画面テンプレート
- `public/style.css` - スタイル
- `dist/` - ビルド出力(git 管理外)
