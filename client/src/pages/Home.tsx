/*
 * NOROSHI Landing Page — "Void Interface" Design
 * Design: Dark-native, minimal, zero ornament
 * Palette: #0A0A0A bg, #E5E5E5 text, flame gradient (#FF453A → #FF9F0A) accent
 * Typography: system-ui + Noto Sans JP, tight letter-spacing on headings
 * Tone: Tactical × Professional — speak to the field, not the boardroom
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
  Check,
  Lock,
  MapPinOff,
  Server,
  Menu,
  X,
  TriangleAlert,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { toast } from "sonner";

/* ── Image paths (S3 permanent URLs) ── */
const HERO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663250854362/ExCJGtidgoyxyuZS.jpg";
// TODO: 以下の画像はアプリスクリーンショットに差し替え予定
// const FEATURE_ALERT — 招集画面スクリーンショット
// const FEATURE_MAP — 水利マップ画面スクリーンショット
// const FEATURE_HAZARD — ハザード画面スクリーンショット
const FEATURE_REALTIME = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663250854362/eVJxpBZQMHalJyow.jpg"; // TODO: ノードを大きく粗い画像に差し替え
const NOROSHI_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663250854362/evYsEPHmdLSUaZki.png";

/* ── Store URLs (公開後に差し替え) ── */
const APP_STORE_URL = "#"; // TODO: App Store公開後にURLを設定
const GOOGLE_PLAY_URL = "#"; // TODO: Google Play公開後にURLを設定
const STORE_AVAILABLE = false; // true に変更するとバッジが有効化される

/* ── X (Twitter) URL ── */
const X_URL = "https://x.com/noroshi_app"; // TODO: 公式Xアカウント公開後にURLを設定

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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navItems = [
    { label: "機能", href: "#features", isLink: false },
    { label: "料金", href: "#pricing", isLink: false },
    { label: "お問い合わせ", href: "/contact", isLink: true },
    { label: "ログイン", href: "/app/login", isLink: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
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

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.isLink ? (
                <Link key={item.label} href={item.href} className="text-[13px] text-[#A8A8A8] hover:text-white transition-colors">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className="text-[13px] text-[#A8A8A8] hover:text-white transition-colors">
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold text-white rounded-lg btn-flame"
            >
              はじめる
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
            <button
              className="md:hidden p-2 text-[#A8A8A8] hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="メニュー"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl pt-20"
          >
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex flex-col items-center gap-1 px-6 py-8"
            >
              {navItems.map((item) => {
                const inner = (
                  <span className="block w-full text-center text-[18px] text-[#E5E5E5] py-4 border-b border-white/[0.04] hover:text-white transition-colors">
                    {item.label}
                  </span>
                );
                return item.isLink ? (
                  <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="w-full">
                    {inner}
                  </Link>
                ) : (
                  <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="w-full">
                    {inner}
                  </a>
                );
              })}
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white rounded-xl btn-flame"
              >
                はじめる
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ── Hero Section ── */
function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-start justify-center overflow-hidden">
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

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 pt-28 pb-16 text-center">
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
          className="text-[clamp(15px,2vw,18px)] text-[#A8A8A8] leading-relaxed max-w-[540px] mx-auto mb-7"
        >
          招集から現場活動まで。
          <br className="hidden sm:block" />
          消防団の出動を、ひとつのアプリで変える。
        </motion.p>

        {/* CTA hierarchy: Primary (X link) > Secondary (機能を見る) > Tertiary (Webで使う) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {STORE_AVAILABLE ? (
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-white rounded-xl btn-flame"
            >
              <Smartphone className="w-4 h-4" />
              アプリをダウンロード
            </a>
          ) : (
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-white rounded-xl btn-flame"
            >
              まもなく公開 — Xで最新情報を受け取る
            </a>
          )}
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium text-[#A8A8A8] rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:text-white transition-all"
          >
            機能を見る
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Tertiary: Web版テキストリンク */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-5"
        >
          <button
            onClick={() => {
              toast("Web版は現在準備中です。アプリ版を先行リリース予定です。", {
                duration: 4000,
              });
            }}
            className="text-[13px] text-[#666] hover:text-[#A8A8A8] transition-colors underline underline-offset-4 decoration-[#444]"
          >
            Web版で使う
          </button>
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
      "応答があるまで最大4回自動で電話。強制通知と組み合わせて、確実に届ける。招集ボタン一つで、最大30人に同時架電。",
    image: null, // TODO: アプリの招集画面スクリーンショットに差し替え
    accent: "from-[#FF453A] to-[#FF9F0A]",
  },
  {
    icon: Bell,
    title: "強制通知",
    description:
      "地震速報やJアラートのように、端末の音量設定を無視して最大音量で通知。通常のプッシュ通知と強制通知を招集の種別に応じて使い分け可能。",
    image: null, // TODO: 通知画面イメージに差し替え
    accent: "from-[#FF453A] to-[#FF9F0A]",
  },
  {
    icon: Radio,
    title: "参集状況",
    description:
      "誰が来るか、あと何人か。応答状況と位置情報がリアルタイムで共有される。参集中も活動中も、全員の動きが見える。",
    image: FEATURE_REALTIME, // TODO: ノードをもう少し大きく粗い画像に差し替え
    accent: "from-[#FF9F0A] to-[#FF453A]",
  },
  {
    icon: MapPin,
    title: "水利マップ",
    description:
      "消火栓・防火水槽をピンポイントで登録。台帳をインポートすればマップに自動反映。データ出力にも対応。",
    image: null, // TODO: アプリの水利マップ画面スクリーンショットに差し替え
    accent: "from-[#32ADE6] to-[#0A84FF]",
  },
  {
    icon: TriangleAlert,
    title: "ハザード情報",
    description:
      "土砂災害・浸水・津波のハザード情報を地図上に表示。出動時の危険箇所を事前に把握し、安全な活動を支援。",
    image: null, // TODO: アプリのハザード画面スクリーンショットに差し替え
    accent: "from-[#FF6B6B] to-[#EE5A24]",
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
    <section id="features" className="py-14 relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-[12px] font-semibold tracking-[0.15em] text-[#FF9F0A] mb-4 block">
              機能
            </span>
            <h2
              className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.025em] text-white mb-4"
              style={{ fontFamily: "'Noto Sans JP', system-ui, sans-serif" }}
            >
              サイレンが鳴った。あなたの分団は何人集まる？
            </h2>
            <p className="text-[16px] text-[#666] max-w-[520px] mx-auto">
              深夜の火災で、あなたの分団は何人集まる？
              <br />
              NOROSHIは、その答えを変えるために作られた。
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.08}>
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
                <div className={`p-7 ${!feature.image ? "pt-9" : ""}`}>
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.accent} flex items-center justify-center mb-4 opacity-90`}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[20px] font-bold text-white mb-2.5 tracking-[-0.01em]">
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
    <section className="py-12 border-y border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "4段階", label: "エスカレーション通知" },
              { value: "最大30人", label: "同時架電対応" },
              { value: "3D地図", label: "航空写真と地形データで現場判断を支援" },
              { value: "全国共有", label: "水利データは自治体を超えて全消防団員で共有" },
            ].map((stat) => (
              <div key={stat.value}>
                <div className="text-[clamp(28px,4vw,40px)] font-bold text-flame-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-[12px] text-[#666] leading-relaxed max-w-[180px] mx-auto">{stat.label}</div>
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
      "招集受信・応答（通常プッシュ通知）",
      "参集ダッシュボード閲覧",
      "位置情報閲覧",
      "水利マップ閲覧",
      "出動記録閲覧",
    ],
    cta: "アプリをダウンロード",
    highlighted: false,
    subNote: "",
  },
  {
    name: "NOROSHI Pro",
    price: "¥1,000",
    period: "/月",
    description: "架電・水利管理など全機能をアンロック",
    subNote: "年額 ¥10,000（2ヶ月分お得）",
    features: [
      "無料プランの全機能",
      "招集発信・自動架電",
      "緊急通知（マナーモード貫通）",
      "エスカレーション通知設定",
      "水利の登録・編集・点検",
      "台帳インポート・エクスポート",
      "出動記録の作成・編集",
      "メンバー管理・招待",
    ],
    cta: "アプリをダウンロード",
    highlighted: true,
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="py-14 relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-[12px] font-semibold tracking-[0.15em] text-[#FF9F0A] mb-4 block">
              料金
            </span>
            <h2
              className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.025em] text-white mb-4"
              style={{ fontFamily: "'Noto Sans JP', system-ui, sans-serif" }}
            >
              必要な機能を、あなたの手に。
            </h2>
            <p className="text-[16px] text-[#666] max-w-[480px] mx-auto">
              現場対応力を上げるならPro。
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[720px] mx-auto">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl border p-7 flex flex-col h-full ${
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
                <div className="mb-5">
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

                <ul className="space-y-2.5 mb-7 flex-1">
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
                  onClick={() => {}}
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
      description: "すべてのデータは東京リージョンのサーバーで管理。通信はTLS暗号化、データベースは行レベルセキュリティでアクセスを厳密に制御しています。",
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
    <section className="py-14 relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-[12px] font-semibold tracking-[0.15em] text-[#FF9F0A] mb-4 block">
              セキュリティ
            </span>
            <h2
              className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.025em] text-white"
              style={{ fontFamily: "'Noto Sans JP', system-ui, sans-serif" }}
            >
              データの扱い
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/[0.06] bg-[#111111] p-7 card-glow">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#888]" />
                </div>
                <h3 className="text-[16px] font-semibold text-white mb-2.5">
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
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF453A]/[0.03] to-transparent" />
      <div className="relative max-w-[1200px] mx-auto px-5 text-center">
        <FadeIn>
          <h2
            className="text-[clamp(28px,5vw,48px)] font-bold tracking-[-0.025em] text-white mb-5"
            style={{ fontFamily: "'Noto Sans JP', system-ui, sans-serif" }}
          >
            あなたの分団を、
            <br className="sm:hidden" />
            次の出動から変える。
          </h2>
          <p className="text-[16px] text-[#888] max-w-[480px] mx-auto mb-10">
            参集、水利管理、活動支援。すべてを、ひとつに。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={STORE_AVAILABLE ? APP_STORE_URL : X_URL}
              target={STORE_AVAILABLE ? undefined : "_blank"}
              rel={STORE_AVAILABLE ? undefined : "noopener noreferrer"}
              className={`inline-flex items-center gap-3 w-[200px] px-6 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] transition-all ${!STORE_AVAILABLE ? 'opacity-60' : ''}`}
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current shrink-0">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-[#888] leading-tight">{STORE_AVAILABLE ? 'ダウンロード' : 'まもなく公開'}</div>
                <div className="text-[16px] font-semibold text-white leading-tight">App Store</div>
              </div>
            </a>
            <a
              href={STORE_AVAILABLE ? GOOGLE_PLAY_URL : X_URL}
              target={STORE_AVAILABLE ? undefined : "_blank"}
              rel={STORE_AVAILABLE ? undefined : "noopener noreferrer"}
              className={`inline-flex items-center gap-3 w-[200px] px-6 py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] transition-all ${!STORE_AVAILABLE ? 'opacity-60' : ''}`}
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current shrink-0">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 1.33a1 1 0 010 1.724l-2.302 1.33-2.535-2.535 2.535-2.535v.686zm-3.906-3.906L4.864 12.14l10.928-6.538z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-[#888] leading-tight">{STORE_AVAILABLE ? 'ダウンロード' : 'まもなく公開'}</div>
                <div className="text-[16px] font-semibold text-white leading-tight">Google Play</div>
              </div>
            </a>
          </div>
          {!STORE_AVAILABLE && (
            <p className="text-[12px] text-[#555] mt-6">
              まもなく公開予定
            </p>
          )}
          {STORE_AVAILABLE && (
            <p className="text-[12px] text-[#555] mt-6">
              iOS / Android 対応
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={NOROSHI_LOGO} alt="NOROSHI" className="w-7 h-7 rounded-lg" />
              <span className="text-[15px] font-bold tracking-[0.08em] text-white">
                NOROSHI
              </span>
            </div>
            <p className="text-[14px] text-[#666] leading-relaxed max-w-[320px]">
              消防団の参集・活動を支えるアプリ。
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
                <Link
                  href="/contact"
                  className="text-[14px] text-[#888] hover:text-white transition-colors"
                >
                  お問い合わせフォーム
                </Link>
              </li>
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
