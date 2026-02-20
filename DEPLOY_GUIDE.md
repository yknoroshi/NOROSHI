# NOROSHI Web — Cloudflare Pages デプロイガイド

noroshitech.com でのホスティングに向けた、Cloudflare Pages へのデプロイ手順書です。

---

## 前提条件

| 項目 | 要件 |
|---|---|
| Cloudflare アカウント | 無料プランで可 |
| ドメイン | noroshitech.com（Cloudflare DNS に移管済み、または CNAME 設定可能） |
| GitHub リポジトリ | yknoroshi/NOROSHI（web/ ディレクトリ内にフロントエンドコード） |

---

## 1. Cloudflare Pages プロジェクトの作成

Cloudflare ダッシュボード（https://dash.cloudflare.com）にログインし、以下の手順でプロジェクトを作成します。

1. 左メニューから **Workers & Pages** を選択
2. **Create** ボタンをクリック
3. **Pages** タブを選択し、**Connect to Git** をクリック
4. GitHub アカウントを連携し、**yknoroshi/NOROSHI** リポジトリを選択
5. 以下のビルド設定を入力

### ビルド設定

| 設定項目 | 値 |
|---|---|
| Production branch | `main` |
| Build command | `cd web && npm install && npm run build` |
| Build output directory | `web/dist/public` |
| Root directory | `/` |
| Node.js version | `22`（環境変数 `NODE_VERSION` = `22` で指定） |

**補足:** Cloudflare Pages は pnpm をネイティブサポートしています。もし npm でエラーが出る場合は、Build command を以下に変更してください。

```
cd web && corepack enable && pnpm install && pnpm run build
```

その場合、環境変数に `COREPACK_ENABLE` = `1` も追加してください。

---

## 2. 環境変数の設定

Cloudflare Pages のプロジェクト設定 → **Environment variables** で以下を設定します。現時点で必須の変数はありませんが、将来の拡張に備えて以下を設定しておくことを推奨します。

| 変数名 | 値 | 用途 |
|---|---|---|
| `NODE_VERSION` | `22` | Node.js バージョン指定 |

Supabase 連携を実装する際には、以下の変数を追加します（現時点では不要）。

| 変数名 | 値 | 用途 |
|---|---|---|
| `VITE_SUPABASE_URL` | `https://xxx.supabase.co` | Supabase プロジェクト URL |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbG...` | Supabase 匿名キー |

---

## 3. カスタムドメインの設定

デプロイ完了後、Cloudflare Pages のプロジェクト設定 → **Custom domains** で noroshitech.com を追加します。

### ドメインが Cloudflare DNS を使用している場合

1. **Custom domains** → **Set up a custom domain** をクリック
2. `noroshitech.com` を入力
3. Cloudflare が自動的に DNS レコード（CNAME）を追加
4. SSL 証明書も自動発行される

### ドメインが外部 DNS を使用している場合

1. 外部 DNS プロバイダーで以下の CNAME レコードを追加

| タイプ | ホスト | 値 |
|---|---|---|
| CNAME | `@` または `noroshitech.com` | `noroshi-web.pages.dev` |
| CNAME | `www` | `noroshi-web.pages.dev` |

2. Cloudflare Pages 側でドメインの検証を完了
3. SSL 証明書の発行を待つ（通常数分〜数時間）

---

## 4. リダイレクト設定（SPA 対応）

React Router（wouter）を使用した SPA のため、全パスを `index.html` にリダイレクトする必要があります。`web/client/public/_redirects` ファイルを作成してください。

```
/*    /index.html   200
```

このファイルはビルド時に `dist/public/` にコピーされ、Cloudflare Pages が自動的に読み取ります。

---

## 5. デプロイの確認

デプロイが完了すると、以下の URL でアクセスできます。

| URL | 用途 |
|---|---|
| `https://noroshi-web.pages.dev` | Cloudflare Pages デフォルトドメイン |
| `https://noroshitech.com` | カスタムドメイン（設定後） |

### 確認チェックリスト

- [ ] トップページが正常に表示される
- [ ] ヒーロー画像・アイコン画像が表示される
- [ ] `/privacy`、`/terms`、`/tokushoho` が正常に表示される
- [ ] `/contact` のお問い合わせフォームが動作する
- [ ] `/app/login` にアクセスするとログイン画面が表示される
- [ ] モバイルでハンバーガーメニューが動作する
- [ ] OGP 画像が正しく表示される（https://ogp.me/ 等で確認）

---

## 6. ストア URL の差し替え手順

App Store / Google Play 公開後、以下の手順でストアリンクを有効化します。

1. `web/client/src/pages/Home.tsx` を開く
2. ファイル上部の定数を修正

```tsx
const APP_STORE_URL = "https://apps.apple.com/app/noroshi/idXXXXXXXXXX";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.noroshitech.app";
const STORE_AVAILABLE = true;
```

3. コミットして push すると、Cloudflare Pages が自動デプロイ

---

## 7. 自動デプロイ

Cloudflare Pages は GitHub と連携しているため、`main` ブランチに push するたびに自動でビルド・デプロイが実行されます。プレビューデプロイ（PR ごとのプレビュー URL）も自動で作成されます。

---

## トラブルシューティング

### ビルドが失敗する場合

`Build command` が正しいか確認してください。特に `cd web` でディレクトリを移動している点に注意してください。Cloudflare Pages のビルドログで詳細なエラーメッセージを確認できます。

### 画像が表示されない場合

現在、画像は外部 CDN（S3）でホスティングしています。CDN URL が有効であることを確認してください。将来的に画像を Cloudflare R2 に移行する場合は、R2 バケットを作成し、カスタムドメインを設定した上で画像 URL を差し替えます。

### SPA ルーティングが動作しない場合

`web/client/public/_redirects` ファイルが存在し、ビルド出力に含まれていることを確認してください。Cloudflare Pages は `_redirects` ファイルを自動的に読み取り、リダイレクトルールを適用します。

---

*最終更新: 2026-02-20*
