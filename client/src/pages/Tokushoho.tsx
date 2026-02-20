import LegalLayout from "@/components/LegalLayout";

export default function Tokushoho() {
  return (
    <LegalLayout title="特定商取引法に基づく表記" lastUpdated="2026年2月20日">
      <div className="overflow-x-auto">
        <table className="w-full text-[15px]">
          <tbody>
            {[
              { label: "販売事業者", value: "NOROSHI Tech（個人事業）" },
              { label: "代表者", value: "請求があった場合に遅滞なく開示いたします" },
              { label: "所在地", value: "請求があった場合に遅滞なく開示いたします" },
              {
                label: "連絡先",
                value: (
                  <>
                    <a href="mailto:info@noroshitech.com" className="text-[#FF9F0A] hover:underline">
                      info@noroshitech.com
                    </a>
                    <br />
                    請求があった場合に電話番号を遅滞なく開示いたします
                  </>
                ),
              },
              {
                label: "販売価格",
                value: (
                  <>
                    個人プラン: 月額 980円（税込）/ 年額 9,800円（税込）
                    <br />
                    団プラン: 月額 800円/人（税込）/ 年額 8,000円/人（税込）（10人〜）
                  </>
                ),
              },
              { label: "支払方法", value: "App Store（Apple）またはGoogle Playでのアプリ内課金" },
              { label: "支払時期", value: "購入手続き完了時に課金されます。自動更新の場合は各期間の終了日に自動課金されます。" },
              { label: "商品の引渡時期", value: "購入手続き完了後、直ちにご利用いただけます" },
              {
                label: "返品・キャンセル",
                value:
                  "デジタルコンテンツの性質上、購入後の返品・返金はお受けしておりません。サブスクリプションの解約は、各ストア（App Store / Google Play）のサブスクリプション管理画面から行えます。解約後も現在の課金期間の終了まで有料機能をご利用いただけます。",
              },
              {
                label: "動作環境",
                value: (
                  <>
                    iOS 16.0以降 / Android 8.0以降
                    <br />
                    インターネット接続が必要です
                  </>
                ),
              },
            ].map((row) => (
              <tr key={row.label} className="border-b border-white/[0.06]">
                <th className="text-left py-4 px-4 text-white font-semibold text-[14px] align-top w-[160px] whitespace-nowrap bg-white/[0.02]">
                  {row.label}
                </th>
                <td className="py-4 px-4 text-[#B0B0B0]">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LegalLayout>
  );
}
