import LegalLayout from "@/components/LegalLayout";

export default function Terms() {
  return (
    <LegalLayout title="利用規約" lastUpdated="2026年2月19日">
      <section>
        <h2 className="text-[20px] font-bold text-white mt-12 mb-4 pb-2 border-b border-white/[0.06]">
          第1条（サービスの概要）
        </h2>
        <p>
          NOROSHI（以下「本サービス」）は、NOROSHI Tech（以下「当社」）が提供する消防団向け緊急招集アプリです。本サービスは、消防団員に対して火災等の緊急情報を迅速かつ確実に伝達し、参集状況の把握および水利情報の共有を支援することを目的としています。
        </p>
        <p className="mt-3">
          本規約は、本サービスの利用に関する条件を定めるものであり、本サービスを利用するすべてのお客様（以下「ユーザー」）に適用されます。
        </p>
      </section>

      <section>
        <h2 className="text-[20px] font-bold text-white mt-12 mb-4 pb-2 border-b border-white/[0.06]">
          第2条（アカウント登録）
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>本サービスの利用にはアカウント登録が必要です。登録にはSMS認証が可能な電話番号が必要となります。</li>
          <li>ユーザーは、正確かつ最新の情報を登録するものとします。</li>
          <li>アカウントの管理責任はユーザー自身にあり、第三者による不正利用について当社は責任を負いません。</li>
          <li>ユーザーは、アプリ内の設定画面からアカウントの削除をリクエストすることができます。</li>
        </ol>
      </section>

      <section>
        <h2 className="text-[20px] font-bold text-white mt-12 mb-4 pb-2 border-b border-white/[0.06]">
          第3条（利用料金）
        </h2>
        <p>本サービスは無料プランと有料プランの2層で構成されます。</p>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-[14px]">
            <thead>
              <tr className="border-b border-white/[0.08]">
                <th className="text-left py-3 px-4 text-white font-semibold">プラン</th>
                <th className="text-left py-3 px-4 text-white font-semibold">料金</th>
                <th className="text-left py-3 px-4 text-white font-semibold">主な機能</th>
              </tr>
            </thead>
            <tbody className="text-[#999]">
              <tr className="border-b border-white/[0.04]">
                <td className="py-3 px-4">無料</td>
                <td className="py-3 px-4">¥0</td>
                <td className="py-3 px-4">招集受信・応答（プッシュ通知）、参集ダッシュボード閲覧、位置情報共有、水利マップ閲覧、出動記録閲覧</td>
              </tr>
              <tr className="border-b border-white/[0.04]">
                <td className="py-3 px-4">NOROSHI Pro</td>
                <td className="py-3 px-4">¥1,000/月（年額 ¥10,000）</td>
                <td className="py-3 px-4">招集発信・自動架電、エスカレーション通知、水利登録・編集・点検、台帳インポート・エクスポート、出動記録作成・編集、メンバー管理・招待</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ol className="list-decimal pl-6 space-y-2 mt-4">
          <li>有料プランの決済は、Apple App Store または Google Play Store を通じて行われます。</li>
          <li>料金は各ストアの定める方法に基づき請求されます。</li>
          <li>有料プランは自動更新されます。更新日の24時間前までに解約手続きを行わない場合、同一条件で自動更新されます。</li>
          <li>解約は各ストアのサブスクリプション管理画面から行ってください。</li>
          <li>当社は、事前にユーザーに通知の上、料金を変更することがあります。</li>
        </ol>
      </section>

      <section>
        <h2 className="text-[20px] font-bold text-white mt-12 mb-4 pb-2 border-b border-white/[0.06]">
          第4条（禁止事項）
        </h2>
        <p>ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
        <ol className="list-decimal pl-6 space-y-2 mt-3">
          <li>虚偽の招集（火災・災害が発生していないにもかかわらず、招集を発信する行為）</li>
          <li>他のユーザーのアカウントを無断で使用する行為</li>
          <li>本サービスの運営を妨害する行為</li>
          <li>不正アクセスまたはそれを試みる行為</li>
          <li>本サービスを通じて取得した情報を、本サービスの目的外で利用する行為</li>
          <li>法令または公序良俗に反する行為</li>
          <li>その他、当社が不適切と判断する行為</li>
        </ol>
        <p className="mt-3">禁止事項に該当する行為が確認された場合、当社は事前の通知なくアカウントの停止・削除を行うことがあります。</p>
      </section>

      <section>
        <h2 className="text-[20px] font-bold text-white mt-12 mb-4 pb-2 border-b border-white/[0.06]">
          第5条（免責事項）
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>当社は、本サービスが常に正常に動作することを保証するものではありません。通信障害、サーバー障害、端末の設定状況等により、通知の遅延または不達が発生する可能性があります。</li>
          <li>本サービスの通知の遅延・不達、位置情報の不正確さ、水利データの誤りその他本サービスの利用に起因して生じた損害について、当社は法令上許容される範囲で責任を負いません。</li>
          <li>本サービスは消防活動を補助するためのツールであり、公的な防災システムの代替となるものではありません。</li>
          <li>ユーザー間のトラブルについて、当社は責任を負いません。</li>
        </ol>
      </section>

      <section>
        <h2 className="text-[20px] font-bold text-white mt-12 mb-4 pb-2 border-b border-white/[0.06]">
          第6条（サービスの変更・中断・終了）
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>当社は、本サービスの内容を予告なく変更することがあります。</li>
          <li>当社は、以下の場合に本サービスの全部または一部を一時中断することがあります。
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>システムの保守・点検を行う場合</li>
              <li>天災、停電その他の不可抗力により運営が困難な場合</li>
              <li>その他、当社が必要と判断した場合</li>
            </ul>
          </li>
          <li>当社は、30日前までにユーザーに通知の上、本サービスを終了することがあります。</li>
        </ol>
      </section>

      <section>
        <h2 className="text-[20px] font-bold text-white mt-12 mb-4 pb-2 border-b border-white/[0.06]">
          第7条（知的財産権）
        </h2>
        <p>本サービスに関する知的財産権は当社に帰属します。ユーザーが本サービスに登録したデータの権利はユーザーに帰属しますが、当社はサービスの運営に必要な範囲でこれを利用できるものとします。</p>
      </section>

      <section>
        <h2 className="text-[20px] font-bold text-white mt-12 mb-4 pb-2 border-b border-white/[0.06]">
          第8条（規約の変更）
        </h2>
        <p>当社は、必要に応じて本規約を変更することがあります。変更後の規約は、本アプリまたはウェブサイト上に掲載した時点で効力を生じるものとします。重要な変更については、事前にお知らせします。</p>
      </section>

      <section>
        <h2 className="text-[20px] font-bold text-white mt-12 mb-4 pb-2 border-b border-white/[0.06]">
          第9条（準拠法・管轄）
        </h2>
        <p>本規約は日本法に準拠し、日本法に従って解釈されるものとします。本サービスに関する紛争については、広島地方裁判所を第一審の専属的合意管轄裁判所とします。</p>
      </section>

      <section>
        <div className="mt-12 p-6 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <h2 className="text-[20px] font-bold text-white mb-3">第10条（お問い合わせ）</h2>
          <p>本規約に関するお問い合わせは、以下までご連絡ください。</p>
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
