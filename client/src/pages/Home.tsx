/*
 * NOROSHI Landing Page — "Void Interface" Design
 * Design: Dark-native, minimal, zero ornament
 * Palette: #0A0A0A bg, #E5E5E5 text, flame gradient (#FF453A → #FF9F0A) accent
 * Typography: system-ui + Noto Sans JP, tight letter-spacing on headings
 */

import { useEffect, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  MapPin,
  Radio,
  FileText,
  ChevronRight,
  Smartphone,
  Zap,
  Check,
} from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/khG9oGVTKW3WUf87BX7KZu/sandbox/YMrJ70ltu7J1BOcHUwXKgv-img-1_1771560778000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2hHOW9HVlRLVzNXVWY4N0JYN0tadS9zYW5kYm94L1lNcko3MGx0dTdKMUJPY0hVd1hLZ3YtaW1nLTFfMTc3MTU2MDc3ODAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QK8GbsqJtwp67L4yGMfW5aZxc11JIL~rCBZFkwXcVkFtpeCSP1p-KZ5OXIaAsZeKnrbmCYsKlIPjJcE8uNNEybBX-URNIzWrobipM9f8qSEddrAcnKiCF2QAkokRDtjv8RKnh2xYKkCYtNdyfU9wSADrN4d~K-J3SMkbWbdEEJ~tr14tzPPLMbmIjK4JotlplFbaQUZkFmSpEjZXfyVmPEewpFgRTjRJfKnYZGCwWl59DvQior61zaxKBj0u7JDZ6JT6RftkKW9CKKuuQO~jNsmDKAo5BaFv0qD3FdjBXzUEIaX1TdB1WNXw1-0eSVFk557pnk2JtH4hyzKTEAFnFQ__";

const FEATURE_ALERT = "https://private-us-east-1.manuscdn.com/sessionFile/khG9oGVTKW3WUf87BX7KZu/sandbox/YMrJ70ltu7J1BOcHUwXKgv-img-2_1771560765000_na1fn_ZmVhdHVyZS1hbGVydA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2hHOW9HVlRLVzNXVWY4N0JYN0tadS9zYW5kYm94L1lNcko3MGx0dTdKMUJPY0hVd1hLZ3YtaW1nLTJfMTc3MTU2MDc2NTAwMF9uYTFmbl9abVZoZEhWeVpTMWhiR1Z5ZEEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=h3ituERExW3fvn6VG2ivNHH1p50bvUALb5inaeODJz6xcbeD5RKN68cNl26WSGF-FDomWk4gPq0p0D0EOBnCHSrgo4Zl3BY1mgsABVeLjdN179F7ot8iEIgftzfH33s1EENWMx1b3t1aY~r~O3C8GQ85aKO5znIsRHk~2qwBCZNx6L5nJ~-YKdiCvMpetQLR4TIdptCfY6X-2OnRvOilHbwM3L9IrJ0YThR2CdeFlzjsi-xEdQG~DJmIzUpWdY8mtdGCfsEsakiGDgu1DgecUHBDqarXPFttneGxfmKE34QJyVgWRL0YJL~9J4ipvz7AtJ2krKBYpq~bzCLFys5a1A__";

const FEATURE_MAP = "https://private-us-east-1.manuscdn.com/sessionFile/khG9oGVTKW3WUf87BX7KZu/sandbox/YMrJ70ltu7J1BOcHUwXKgv-img-3_1771560780000_na1fn_ZmVhdHVyZS1tYXA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2hHOW9HVlRLVzNXVWY4N0JYN0tadS9zYW5kYm94L1lNcko3MGx0dTdKMUJPY0hVd1hLZ3YtaW1nLTNfMTc3MTU2MDc4MDAwMF9uYTFmbl9abVZoZEhWeVpTMXRZWEEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Lus4VYjjsU7SRW1~xeQO4WVnYSEgfERDHfgBxyRKWsHHFqmifX3Y6I2Nu2vy4geEnyymYBrpdlK4l68Z23RJU8wlWR~p07e-yBk0tbyRogLg5eFE9djmTvhxO6YLcQbpZNRZBHky8GXDrRulerVPpEM2LMgkM2RUp92EIqditf6H1bhDIFjl5hQwzTM2HJJnhy8xYqDQrzZEXwyk0K7lt8KrsvoK4U6fjuUjm1~XfbdDgq8veQaCVpOajo7WB2TMmmRrbsYB37A1J226yhQWpT2Za0Kkg4JmFvS2G8QijTCS5~j4vbX2sBu1bgUyxnqN29MT46TmlgxXeXDOF87afw__";

const FEATURE_REALTIME = "https://private-us-east-1.manuscdn.com/sessionFile/khG9oGVTKW3WUf87BX7KZu/sandbox/YMrJ70ltu7J1BOcHUwXKgv-img-4_1771560778000_na1fn_ZmVhdHVyZS1yZWFsdGltZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2hHOW9HVlRLVzNXVWY4N0JYN0tadS9zYW5kYm94L1lNcko3MGx0dTdKMUJPY0hVd1hLZ3YtaW1nLTRfMTc3MTU2MDc3ODAwMF9uYTFmbl9abVZoZEhWeVpTMXlaV0ZzZEdsdFpRLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jSv~EZLFHJ5HGSKnX2xXj80VKKGs3jCfj-ItAc60zXEWRf0UZDX6xvOnULk1IIzAcRLTDN7DQu4AkCY5xMyI0HuUPqW~F0CVsDwkT90uBU5IVfYi5x8Tm7ZiZGrK3lIwGkNNwZLeKM3chO4tKxRA4sm5S-fHFd6EgPSlorIbwPicIDHEbMCG3oiZjVDTL9tLO8tpVYxGB1SQoHqi2Ko~fz2Vc68V57rwWnH4kdkaXzf5DXIzyS8oy9Kqib6SQ8YEeOoh2xwVdUTz23xEQtP8bjag4jsPzAmUqYnApJMhTFCln31Od5rWF0-EXst8dNrMjj9CRfzz9HtLHyUpDUa-yQ__";

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
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FF453A] to-[#FF9F0A] flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
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
              Emergency Response Platform
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
          緊急招集を、
          <br />
          <span className="text-flame-gradient">再定義する。</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[clamp(15px,2vw,18px)] text-[#A8A8A8] leading-relaxed max-w-[540px] mx-auto mb-10"
        >
          自動架電、リアルタイム参集状況、水利マップ。
          <br className="hidden sm:block" />
          現場のオペレーションを、テクノロジーで変える。
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
      "プッシュ通知で届かないとき、自動で電話をかける。深夜の火災でも、確実に届ける。",
    image: FEATURE_ALERT,
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
      "消火栓、防火水槽、自然水利。すべての水利情報を地図上で共有し、現場到着前に把握する。",
    image: FEATURE_MAP,
    accent: "from-[#32ADE6] to-[#0A84FF]",
  },
  {
    icon: FileText,
    title: "出動記録",
    description:
      "出動のタイムラインを自動記録。報告書作成の手間を削減し、活動の可視化を実現する。",
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
            <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-[#FF9F0A] mb-4 block">
              Features
            </span>
            <h2
              className="text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.025em] text-white mb-4"
              style={{ fontFamily: "'Noto Sans JP', system-ui, sans-serif" }}
            >
              必要な機能を、必要なだけ。
            </h2>
            <p className="text-[16px] text-[#666] max-w-[480px] mx-auto">
              現場が本当に必要としている機能だけを、徹底的に磨き上げた。
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
              { value: "3秒", label: "平均通知到達時間" },
              { value: "24/7", label: "自動架電対応" },
              { value: "100%", label: "通知到達率" },
              { value: "¥0", label: "基本機能" },
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
    name: "個人",
    price: "¥0",
    period: "",
    description: "基本機能をすべて無料で",
    features: [
      "招集の発信・受信・応答",
      "参集ダッシュボード",
      "位置情報共有",
      "メンバー管理",
      "水利閲覧",
    ],
    cta: "無料ではじめる",
    highlighted: false,
  },
  {
    name: "個人 Pro",
    price: "¥980",
    period: "/月",
    description: "自動架電で確実に届ける",
    features: [
      "無料プランの全機能",
      "自動架電",
      "爆音プッシュ通知",
      "エスカレーション通知",
      "水利の登録・編集・点検",
      "出動記録の作成・編集",
    ],
    cta: "Pro をはじめる",
    highlighted: true,
  },
  {
    name: "分団",
    price: "¥4,800",
    period: "/月/分団",
    description: "分団全員にPro機能を",
    features: [
      "個人Proの全機能",
      "分団全員がPro機能を利用",
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
            <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-[#FF9F0A] mb-4 block">
              Pricing
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
                    if (plan.name === "分団") {
                      window.location.href = "mailto:info@noroshitech.com?subject=分団プランについて";
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
            現場を、変えよう。
          </h2>
          <p className="text-[16px] text-[#888] max-w-[440px] mx-auto mb-10">
            NOROSHIは、あなたの現場のオペレーションを
            <br className="hidden sm:block" />
            テクノロジーで進化させます。
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
            ストア公開準備中 — 事前登録受付中
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
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FF453A] to-[#FF9F0A] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-[15px] font-bold tracking-[0.08em] text-white">
                NOROSHI
              </span>
            </div>
            <p className="text-[14px] text-[#666] leading-relaxed max-w-[320px]">
              緊急招集を再定義する。
              <br />
              現場のオペレーションを、テクノロジーで変える。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#555] mb-4">
              Legal
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
            <h4 className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[#555] mb-4">
              Contact
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
      <CTASection />
      <Footer />
    </div>
  );
}
