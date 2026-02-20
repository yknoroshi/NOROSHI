# NOROSHI Web — Google Search Console 登録ガイド

noroshitech.com を Google 検索に最適化するための、Search Console 登録手順書です。

---

## 前提条件

| 項目 | 要件 |
|---|---|
| Google アカウント | 管理用の Google アカウント |
| ドメイン | noroshitech.com が Cloudflare Pages でデプロイ済み |
| DNS 管理権限 | ドメイン所有権の確認に必要 |

---

## 1. Search Console にプロパティを追加

Google Search Console（https://search.google.com/search-console）にアクセスし、以下の手順で進めます。

1. 左上の **プロパティを追加** をクリック
2. **URL プレフィックス** を選択し、`https://noroshitech.com` を入力
3. **続行** をクリック

---

## 2. 所有権の確認

Cloudflare DNS を使用している場合、以下のいずれかの方法で確認できます。

### 方法 A: DNS TXT レコード（推奨）

1. Search Console が表示する TXT レコードの値をコピー
2. Cloudflare ダッシュボード → DNS → レコードを追加
3. 以下の設定で TXT レコードを追加

| タイプ | 名前 | 値 |
|---|---|---|
| TXT | `@` | `google-site-verification=XXXXX...` |

4. DNS の反映を待ち（通常数分）、Search Console で **確認** をクリック

### 方法 B: HTML ファイル

1. Search Console からダウンロードした HTML 確認ファイルを `web/client/public/` に配置
2. GitHub に push してデプロイ
3. Search Console で **確認** をクリック

---

## 3. サイトマップの送信

所有権の確認が完了したら、サイトマップを送信します。

1. 左メニューから **サイトマップ** を選択
2. URL 欄に `https://noroshitech.com/sitemap.xml` を入力
3. **送信** をクリック

サイトマップには以下の 5 ページが含まれています。

| URL | 優先度 | 更新頻度 |
|---|---|---|
| `/` | 1.0 | 毎週 |
| `/contact` | 0.5 | 毎月 |
| `/privacy` | 0.3 | 毎月 |
| `/terms` | 0.3 | 毎月 |
| `/tokushoho` | 0.3 | 毎月 |

---

## 4. インデックス登録のリクエスト

サイトマップ送信後、主要ページのインデックス登録を手動でリクエストすると、より早くインデックスされます。

1. Search Console 上部の **URL 検査** に `https://noroshitech.com` を入力
2. **インデックス登録をリクエスト** をクリック
3. 同様に `/contact` ページもリクエスト

---

## 5. 確認事項

登録完了後、数日〜数週間で以下を確認できます。

- **カバレッジ**: インデックスされたページ数
- **検索パフォーマンス**: 検索クエリ、クリック数、表示回数
- **モバイルユーザビリティ**: モバイル対応の問題がないか
- **構造化データ**: JSON-LD（Organization, SoftwareApplication）が正しく認識されているか

---

## 補足: robots.txt の確認

現在の `robots.txt` は以下の設定です。

```
User-agent: *
Allow: /
Disallow: /app/

Sitemap: https://noroshitech.com/sitemap.xml
```

`/app/` 配下（ログインページ、ダッシュボード等）はクロール対象外としています。これにより、認証が必要なページが検索結果に表示されることを防ぎます。

---

*最終更新: 2026-02-21*
