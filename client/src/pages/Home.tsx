/*
 * NOROSHI Landing Page — "Void Interface" Design
 * Design: Dark-native, minimal, zero ornament
 * Palette: #0A0A0A bg, #E5E5E5 text, flame gradient (#FF453A → #FF9F0A) accent
 * Typography: system-ui + Noto Sans JP, tight letter-spacing on headings
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  MapPin,
  Radio,
  FileText,
  Bell,
  ChevronRight,
  Smartphone,
  Zap,
  Check,
  Monitor,
  Shield,
  Lock,
  MapPinOff,
  Server,
} from "lucide-react";

/* ── Image paths (local) ── */
const HERO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663250854362/wQuZeFmBXafdlhcR.jpg";
const FEATURE_ALERT = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663250854362/yGexdjatLTgmkIif.jpg";
const FEATURE_MAP = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663250854362/YrRkOzPQPnqYSpGf.jpg";
const FEATURE_REALTIME = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663250854362/eVJxpBZQMHalJyow.jpg";
const NOROSHI_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663250854362/evYsEPHmdLSUaZki.png";

/* ── Fade-in animation wrapper ── */
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Header ── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <img src={NOROSHI_LOGO} alt="NOROSHI" className="w-7 h-7 rounded-lg" />
          <span className="text-[15px] font-bold tracking-[0.08em] text-white">
            NOROSHI
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-[13px] text-[#A8A8A8] hover:text-white transition-colors">
            機能
          </a>
          <a href="#pricing" className="text-[13px] text-[#A8A8A8] hover:text-white transition-colors">
            料金
          </a>
          <a href="mailto:info@noroshitech.com" className="text-[13px] text-[#A8A8A8] hover:text-white transition-colors">
            お問い合わせ
          </a>
          <Link href="/app/login" className="text-[13px] text-[#A8A8A8] hover:text-white transition-colors">
            ログイン
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold text-white rounded-lg btn-flame"
          >
            はじめる
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ── Hero Section ── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/40 to-[#0A0A0A]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF453A] animate-pulse" />
            <span className="text-[12px] text-[#A8A8A8] tracking-wide">
              消防団向け参集・活動支援アプリ
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[clamp(36px,7vw,72px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white mb-6"
          style={{ fontFamily: "'Noto Sans JP', system-ui, sans-serif" }}
        >
          架電で、
          <br />
          <span className="text-flame-gradient">絶対起こす。</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[clamp(15px,2vw,18px)] text-[#A8A8A8] leading-relaxed max-w-[540px] mx-auto mb-10"
        >
          狼煙のように、確実に届ける。
          <br className="hidden sm:block" />
          消防団の招集を変える。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-white rounded-xl btn-flame"
          >
            <Smartphone className="w-4 h-4" />
            アプリをダウンロード
          </a>
          <Link
            href="/app/login"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium text-[#A8A8A8] rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:text-white transition-all"
          >
            <Monitor className="w-4 h-4" />
            Webで使う
          </Link>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium text-[#A8A8A8] rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:text-white transition-all"
          >
            機能を見る
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}

/* ── Features Section ── */
const features = [
  {
    icon: Phone,
    title: "自動架電",
    description:
      "応答があるまで最大4回自動で電話。強制通知と組み合わせて、確実に届ける。招集ボタン一つで、最大150人に同時架電。",
    image: FEATURE_ALERT,
    accent: "from-[#FF453A] to-[#FF9F0A]",
  },
  {
    icon: Bell,
    title: "強制通知",
    description:
      "地震速報やJアラートのように、端末の音量設定を無視して最大音量で通知。通常のプッシュ通知と強制通知を招集の種別に応じて使い分け可能。",
    image: null,
    accent: "from-[#FF453A] to-[#FF9F0A]",
  },
  {
    icon: Radio,
    title: "リアルタイム参集",
    description:
      "誰が応答し、誰が向かっているか。参集状況をリアルタイムで全員が把握できる。",
    image: FEATURE_REALTIME,
    accent: "from-[#FF9F0A] to-[#FF453A]",
  },
  {
    icon: MapPin,
    title: "水利マップ",
    description:
      "GPS精度で水利を登録。隣の分団の水利情報も見える。全国の消防団員と水利ネットワークを構築。台帳のインポート・エクスポートにも対応。",
    image: FEATURE_MAP,
    accent: "from-[#32ADE6] to-[#0A84FF]",
  },
  {
    icon: FileText,
    title: "出動記録",
    description:
      "招集から自動で出動記録を生成。種別・場所・参加者が自動入力。",
    image: null,
    accent: "from-[#A8A8A8] to-[#666666]",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-[12px] font-semibold tracking-[0.15em] text-[#FF9F0A] mb-4 block">
              機能
            </span>
            <h2
              className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.025em] text-white mb-4"
              style={{ fontFamily: "'Noto Sans JP', system-ui, sans-serif" }}
            >
              必要な機能を、必要なだけ。
            </h2>
            <p className="text-[16px] text-[#666] max-w-[480px] mx-auto">
              現場が本当に必要としている機能だけを。
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <div className="group relative rounded-2xl border border-white/[0.06] bg-[#111111] overflow-hidden card-glow">
                {feature.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />
                  </div>
                )}
                <div className={`p-8 ${!feature.image ? "pt-10" : ""}`}>
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.accent} flex items-center justify-center mb-5 opacity-90`}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[20px] font-bold text-white mb-3 tracking-[-0.01em]">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] text-[#888] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Stats Section ── */
function StatsSection() {
  return (
    <section className="py-20 border-y border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "4段階", label: "エスカレーション通知" },
              { value: "最大150人", label: "同時架電対応" },
              { value: "GPS精度", label: "水利登録" },
              { value: "¥0", label: "基本機能は無料" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[clamp(28px,4vw,40px)] font-bold text-flame-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-[13px] text-[#666]">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Pricing Section ── */
const plans = [
  {
    name: "無料",
    price: "¥0",
    period: "",
    description: "基本機能をすべて無料で",
    features: [
      "招集の発信・受信・応答（プッシュ通知）",
      "参集状況共有",
      "位置情報共有・閲覧",
      "メンバー管理・招待",
      "水利閲覧",
      "連絡送受信",
    ],
    cta: "無料ではじめる",
    highlighted: false,
  },
  {
    name: "個人Pro",
    price: "¥980",
    period: "/月",
    description: "自動架電で確実に届ける",
    features: [
      "無料プランの全機能",
      "自動架電（最大4回エスカレーション）",
      "緊急通知（マナーモード貫通）",
      "エスカレーション通知設定",
      "水利の登録・編集・点検",
      "台帳インポート・エクスポート",
      "出動記録の作成・編集・閲覧",
    ],
    cta: "Proをはじめる",
    highlighted: true,
  },
  {
    name: "団プラン",
    price: "¥800",
    period: "/人/月",
    description: "所属メンバー全員のPro機能が有効になります",
    subNote: "10人以上から契約可能",
    features: [
      "個人Proの全機能",
      "所属メンバー全員がPro機能を利用可能",
      "一括管理・招待",
      "台帳インポート・エクスポート",
      "優先サポート",
    ],
    cta: "お問い合わせ",
    highlighted: false,
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[12px] font-semibold tracking-[0.15em] text-[#FF9F0A] mb-4 block">
              料金
            </span>
            <h2
              className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.025em] text-white mb-4"
              style={{ fontFamily: "'Noto Sans JP', system-ui, sans-serif" }}
            >
              シンプルな料金体系
            </h2>
            <p className="text-[16px] text-[#666] max-w-[480px] mx-auto">
              基本機能は無料。必要に応じてアップグレード。
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl border p-8 flex flex-col h-full ${
                  plan.highlighted
                    ? "border-[#FF453A]/30 bg-gradient-to-b from-[#FF453A]/[0.04] to-[#111111]"
                    : "border-white/[0.06] bg-[#111111]"
                } card-glow`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#FF453A] to-[#FF9F0A] text-[11px] font-semibold text-white">
                    おすすめ
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-[16px] font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[36px] font-bold text-white tracking-tight">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-[14px] text-[#666]">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-[13px] text-[#666] mt-2">{plan.description}</p>
                  {"subNote" in plan && plan.subNote && (
                    <p className="text-[12px] text-[#FF9F0A] mt-1">{plan.subNote}</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#FF9F0A] mt-0.5 shrink-0" />
                      <span className="text-[14px] text-[#999]">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl text-[14px] font-semibold transition-all ${
                    plan.highlighted
                      ? "btn-flame text-white"
                      : "border border-white/[0.08] text-[#A8A8A8] hover:bg-white/[0.04] hover:text-white"
                  }`}
                  onClick={() => {
                    if (plan.name === "団プラン") {
                      window.location.href = "mailto:info@noroshitech.com?subject=団プランについて";
                    }
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="text-center text-[13px] text-[#555] mt-8">
            有料プランの決済は App Store / Google Play を通じて行われます。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Security Section ── */
function SecuritySection() {
  const items = [
    {
      icon: Server,
      title: "国内サーバー",
      description: "データは東京リージョンのサーバーに保存されています。",
    },
    {
      icon: Lock,
      title: "電話番号の保護",
      description: "電話番号の公開範囲を設定可能。分団内のみ共有、または団全体で共有を選択できます。",
    },
    {
      icon: MapPinOff,
      title: "位置情報の制御",
      description: "位置情報は招集時のみ共有。平時は送信されません。",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[12px] font-semibold tracking-[0.15em] text-[#FF9F0A] mb-4 block">
              安全性
            </span>
            <h2
              className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.025em] text-white mb-4"
              style={{ fontFamily: "'Noto Sans JP', system-ui, sans-serif" }}
            >
              安全性への取り組み
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/[0.06] bg-[#111111] p-8 card-glow">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#888]" />
                </div>
                <h3 className="text-[16px] font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#888] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA Section ── */
function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF453A]/[0.03] to-transparent" />
      <div className="relative max-w-[1200px] mx-auto px-5 text-center">
        <FadeIn>
          <h2
            className="text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.025em] text-white mb-6"
            style={{ fontFamily: "'Noto Sans JP', system-ui, sans-serif" }}
          >
            招集、水利、活動記録。
            <br className="sm:hidden" />
            すべてを、ひとつに。
          </h2>
          <p className="text-[16px] text-[#888] max-w-[480px] mx-auto mb-10">
            消防団の日常と非常時を支えるプラットフォーム。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-semibold text-white rounded-xl btn-flame"
            >
              <Smartphone className="w-4 h-4" />
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-semibold text-white rounded-xl btn-flame"
            >
              <Smartphone className="w-4 h-4" />
              Google Play
            </a>
          </div>
          <p className="text-[12px] text-[#555] mt-4">
            まもなく公開予定
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={NOROSHI_LOGO} alt="NOROSHI" className="w-7 h-7 rounded-lg" />
              <span className="text-[15px] font-bold tracking-[0.08em] text-white">
                NOROSHI
              </span>
            </div>
            <p className="text-[14px] text-[#666] leading-relaxed max-w-[320px]">
              消防団の参集・水利管理・活動記録を支えるアプリ。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.1em] text-[#555] mb-4">
              法務
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-[14px] text-[#888] hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[14px] text-[#888] hover:text-white transition-colors">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/tokushoho" className="text-[14px] text-[#888] hover:text-white transition-colors">
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.1em] text-[#555] mb-4">
              連絡先
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@noroshitech.com"
                  className="text-[14px] text-[#888] hover:text-white transition-colors"
                >
                  info@noroshitech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#444]">
            &copy; 2026 NOROSHI Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ── Main Page ── */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <PricingSection />
      <SecuritySection />
      <CTASection />
      <Footer />
    </div>
  );
}
