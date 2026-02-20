/*
 * /app/login — 電話番号ログイン（UIモック）
 * Void Interface: dark, centered, minimal
 * NOTE: Supabase Auth未接続。UIモックとして構築。
 */

import { useState } from "react";
import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function AppLogin() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      toast("電話番号を入力してください");
      return;
    }
    setStep("otp");
    toast("確認コードを送信しました（UIプレビュー）");
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("ログイン機能は準備中です");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-5">
      <div className="w-full max-w-[400px]">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <Link href="/" className="flex items-center gap-2.5 mb-6">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663250854362/evYsEPHmdLSUaZki.png" alt="NOROSHI" className="w-10 h-10 rounded-xl" />
          </Link>
          <h1
            className="text-[24px] font-bold text-white mb-2 tracking-[-0.02em]"
            style={{ fontFamily: "'Noto Sans JP', system-ui, sans-serif" }}
          >
            電話番号でログイン
          </h1>
          <p className="text-[14px] text-[#666] text-center">
            アプリと同じアカウントでログインできます
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-white/[0.06] bg-[#111] p-8">
          {step === "phone" ? (
            <form onSubmit={handlePhoneSubmit}>
              <label className="block text-[13px] text-[#888] mb-2">
                電話番号
              </label>
              <div className="relative mb-6">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#555]" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="090-1234-5678"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-[15px] text-white placeholder:text-[#444] focus:outline-none focus:border-[#FF9F0A]/40 transition-colors"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl text-[14px] font-semibold text-white btn-flame flex items-center justify-center gap-2"
              >
                確認コードを送信
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit}>
              <p className="text-[14px] text-[#888] mb-4">
                <span className="text-white font-medium">{phone}</span> に確認コードを送信しました
              </p>
              <label className="block text-[13px] text-[#888] mb-2">
                確認コード
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="6桁のコード"
                maxLength={6}
                className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-[15px] text-white text-center tracking-[0.3em] placeholder:text-[#444] placeholder:tracking-normal focus:outline-none focus:border-[#FF9F0A]/40 transition-colors mb-6"
                autoFocus
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl text-[14px] font-semibold text-white btn-flame flex items-center justify-center gap-2 mb-4"
              >
                ログイン
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setStep("phone")}
                className="w-full py-2.5 text-[13px] text-[#666] hover:text-[#999] transition-colors"
              >
                電話番号を変更する
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-[12px] text-[#555]">
            ログイン機能はまもなく公開予定です
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-[13px] text-[#666] hover:text-white transition-colors">
            ← トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
