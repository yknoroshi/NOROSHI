/*
 * /contact — お問い合わせフォーム
 * Void Interface: dark, minimal, flame accent
 * NOTE: バックエンド未接続。フォーム送信はmailto fallback。
 */

import { useState } from "react";
import { Link } from "wouter";
import { Send, ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const NOROSHI_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663250854362/evYsEPHmdLSUaZki.png";

type InquiryType = "general" | "team" | "bug" | "other";

const inquiryTypes: { value: InquiryType; label: string }[] = [
  { value: "general", label: "一般的なお問い合わせ" },
  { value: "team", label: "導入・契約について" },
  { value: "bug", label: "不具合の報告" },
  { value: "other", label: "その他" },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState<InquiryType>("general");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // mailto fallback（バックエンド未接続のため）
    const subject = encodeURIComponent(
      `[NOROSHI] ${inquiryTypes.find((t) => t.value === type)?.label || "お問い合わせ"}`
    );
    const body = encodeURIComponent(
      `お名前: ${name}\nメールアドレス: ${email}\n種別: ${inquiryTypes.find((t) => t.value === type)?.label}\n\n${message}`
    );
    window.location.href = `mailto:info@noroshitech.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src={NOROSHI_LOGO} alt="NOROSHI" className="w-7 h-7 rounded-lg" />
            <span className="text-[15px] font-bold tracking-[0.08em] text-white">
              NOROSHI
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[13px] text-[#A8A8A8] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            トップに戻る
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="pt-32 pb-24 px-5">
        <div className="max-w-[560px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1
              className="text-[32px] font-bold text-white mb-3 tracking-[-0.02em]"
              style={{ fontFamily: "'Noto Sans JP', system-ui, sans-serif" }}
            >
              お問い合わせ
            </h1>
            <p className="text-[15px] text-[#888] mb-10 leading-relaxed">
              ご質問・ご要望・不具合の報告など、お気軽にお問い合わせください。
              <br />
              導入のご相談も承ります。
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/[0.06] bg-[#111111] p-10 text-center"
            >
              <CheckCircle className="w-12 h-12 text-[#FF9F0A] mx-auto mb-4" />
              <h2 className="text-[20px] font-bold text-white mb-3">
                メールアプリが開きます
              </h2>
              <p className="text-[14px] text-[#888] leading-relaxed mb-6">
                お使いのメールアプリが開きますので、そのまま送信してください。
                <br />
                メールアプリが開かない場合は、直接{" "}
                <a
                  href="mailto:info@noroshitech.com"
                  className="text-[#FF9F0A] hover:underline"
                >
                  info@noroshitech.com
                </a>{" "}
                までご連絡ください。
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-[14px] text-[#A8A8A8] hover:text-white transition-colors"
              >
                フォームに戻る
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-[13px] font-medium text-[#A8A8A8] mb-2">
                  お名前 <span className="text-[#FF453A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="山田 太郎"
                  className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-white/[0.08] text-[15px] text-white placeholder:text-[#444] focus:outline-none focus:border-[#FF9F0A]/40 focus:ring-1 focus:ring-[#FF9F0A]/20 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[13px] font-medium text-[#A8A8A8] mb-2">
                  メールアドレス <span className="text-[#FF453A]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-white/[0.08] text-[15px] text-white placeholder:text-[#444] focus:outline-none focus:border-[#FF9F0A]/40 focus:ring-1 focus:ring-[#FF9F0A]/20 transition-all"
                />
              </div>

              {/* Inquiry type */}
              <div>
                <label className="block text-[13px] font-medium text-[#A8A8A8] mb-2">
                  お問い合わせ種別
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {inquiryTypes.map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => setType(t.value)}
                      className={`px-4 py-2.5 rounded-xl text-[13px] border transition-all ${
                        type === t.value
                          ? "border-[#FF9F0A]/40 bg-[#FF9F0A]/[0.06] text-white"
                          : "border-white/[0.06] bg-[#111111] text-[#888] hover:border-white/[0.12] hover:text-white"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[13px] font-medium text-[#A8A8A8] mb-2">
                  お問い合わせ内容 <span className="text-[#FF453A]">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="お問い合わせ内容をご記入ください"
                  className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-white/[0.08] text-[15px] text-white placeholder:text-[#444] focus:outline-none focus:border-[#FF9F0A]/40 focus:ring-1 focus:ring-[#FF9F0A]/20 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-[15px] font-semibold text-white btn-flame flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                送信する
              </button>

              <p className="text-[12px] text-[#555] text-center">
                送信ボタンを押すとメールアプリが開きます。
                <br />
                直接メールを送る場合は{" "}
                <a
                  href="mailto:info@noroshitech.com"
                  className="text-[#FF9F0A] hover:underline"
                >
                  info@noroshitech.com
                </a>{" "}
                まで。
              </p>
            </motion.form>
          )}
        </div>
      </main>
    </div>
  );
}
