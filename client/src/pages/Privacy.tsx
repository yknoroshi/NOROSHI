import LegalLayout from "@/components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout title="プライバシーポリシー" lastUpdated="2026年2月19日">
      <p>
        NOROSHI Tech（以下「当社」）は、消防団向け緊急招集アプリ「NOROSHI」（以下「本アプリ」）におけるお客様の個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
      </p>

      <section>
        <h2 className="text-[20px] font-bold text-white mt-12 mb-4 pb-2 border-b border-white/[0.06]">
          1. 収集する情報
        </h2>
        <p>本アプリでは、サービスの提供に必要な範囲で以下の情報を収集します。</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong className="text-white">電話番号</strong> — アカウント認証および自動架電に使用します</li>
          <li><strong className="text-white">表示名</strong> — アプリ内でメンバーを識別するために使用します</li>
          <li><strong className="text-white">所属消防団・分団</strong> — 組織管理およびグループ機能のために使用します</li>
          <li><strong className="text-white">位置情報</strong> — 招集に応答した際の参集状況把握に使用します（詳細は第4項を参照）</li>
          <li><strong className="text-white">水利データ</strong> — お客様が登録・編集した水利（消火栓・防火水槽等）の情報</li>
          <li><strong className="text-white">出動記録</strong> — 活動報告として記録される出動に関する情報</li>
          <li><strong className="text-white">デバイストークン</strong> — プッシュ通知の配信に使用します</li>
        </ul>
      </section>

      <section>
        <h2 className="text-[20px] font-bold text-white mt-12 mb-4 pb-2 border-b border-white/[0.06]">
          2. 情報の利用目的
        </h2>
        <p>収集した情報は、以下の目的のために利用します。</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>緊急招集の通知および自動架電による確実な伝達</li>
          <li>参集状況のリアルタイム共有（同一分団内のメンバー間）</li>
          <li>水利データの共有（全認証ユーザー間でのネットワーク効果の実現）</li>
          <li>出動記録の作成・管理</li>
          <li>サービスの運営・改善・不具合対応</li>
        </ul>
      </section>

      <section>
        <h2 className="text-[20px] font-bold text-white mt-12 mb-4 pb-2 border-b border-white/[0.06]">
          3. 第三者への情報提供
        </h2>
        <p>当社は、サービスの提供に必要な範囲で、以下の第三者サービスにお客様の情報を提供します。</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li><strong className="text-white">Twilio</strong> — 自動架電機能の提供（電話番号を送信）</li>
          <li><strong className="text-white">Firebase（Google）</strong> — プッシュ通知の配信（デバイストークンを送信）</li>
          <li><strong className="text-white">Supabase</strong> — データベースの管理・運用</li>
          <li><strong className="text-white">RevenueCat</strong> — アプリ内課金の管理</li>
          <li><strong className="text-white">OpenWeatherMap</strong> — 気象情報（風向・風速）の取得</li>
        </ul>
        <p className="mt-3">上記以外の第三者に対して、法令に基づく場合を除き、お客様の個人情報を提供することはありません。</p>
      </section>

      <section>
        <h2 className="text-[20px] font-bold text-white mt-12 mb-4 pb-2 border-b border-white/[0.06]">
          4. 位置情報の取り扱い
        </h2>
        <p>本アプリにおける位置情報の取り扱いは以下のとおりです。</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>招集に対して「出動する」と応答した場合にのみ、位置情報の送信を開始します</li>
          <li>位置情報はアプリがフォアグラウンドで動作している場合にのみ取得します</li>
          <li>取得した位置情報は、同一分団のメンバーにのみ共有されます</li>
          <li>バックグラウンドでの位置追跡は行いません</li>
        </ul>
      </section>

      <section>
        <h2 className="text-[20px] font-bold text-white mt-12 mb-4 pb-2 border-b border-white/[0.06]">
          5. データの保存と削除
        </h2>
        <h3 className="text-[16px] font-semibold text-white mt-6 mb-2">保存場所</h3>
        <p>お客様のデータは、Supabaseが提供するAWS東京リージョンのサーバーに保存されます。</p>
        <h3 className="text-[16px] font-semibold text-white mt-6 mb-2">アカウント削除</h3>
        <p>アカウントの削除をリクエストいただいた場合、リクエスト受領から30日以内にお客様の個人情報を完全に削除します。</p>
        <h3 className="text-[16px] font-semibold text-white mt-6 mb-2">退団時の処理</h3>
        <p>消防団・分団を退団された場合、所属情報は削除されます。過去の出動記録等については匿名化処理を行い、統計目的でのみ保持します。</p>
      </section>

      <section>
        <h2 className="text-[20px] font-bold text-white mt-12 mb-4 pb-2 border-b border-white/[0.06]">
          6. セキュリティ
        </h2>
        <p>当社は、お客様の個人情報を適切に保護するため、技術的・組織的な安全管理措置を講じています。ただし、インターネットを通じたデータ送信について、完全なセキュリティを保証するものではありません。</p>
      </section>

      <section>
        <h2 className="text-[20px] font-bold text-white mt-12 mb-4 pb-2 border-b border-white/[0.06]">
          7. プライバシーポリシーの変更
        </h2>
        <p>当社は、必要に応じて本プライバシーポリシーを変更することがあります。重要な変更がある場合は、本アプリまたはウェブサイト上でお知らせします。</p>
      </section>

      <section>
        <div className="mt-12 p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <h2 className="text-[20px] font-bold text-white mb-3">8. お問い合わせ</h2>
          <p>個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。</p>
          <p className="mt-3">
            <strong className="text-white">NOROSHI Tech</strong>
            <br />
            メール:{" "}
            <a href="mailto:info@noroshitech.com" className="text-[#FF9F0A] hover:underline">
              info@noroshitech.com
            </a>
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
