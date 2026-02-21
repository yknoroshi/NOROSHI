/*
 * NOROSHI Landing Page — "Void Interface" Design
 * Design: Dark-native, minimal, zero ornament
 * Palette: #0A0A0A bg, #E5E5E5 text, flame gradient (#FF453A → #FF9F0A) accent
 * Typography: Noto Sans JP, tight letter-spacing on headings
 * Tone: Tactical × Professional — speak to the field, not the boardroom
 *
 * ⚠️ DESIGN-ONLY CHANGES — All text content preserved exactly as-is
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
  Server,
  Menu,
  X,
  Shield,
  ArrowRight,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";

/* ── Image paths (S3 permanent URLs) ── */
const HERO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663250854362/ExCJGtidgoyxyuZS.jpg";
const NOROSHI_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663250854362/evYsEPHmdLSUaZki.png";

/* Feature card images */
const IMG_MUSTERING = "https://private-us-east-1.manuscdn.com/sessionFile/khG9oGVTKW3WUf87BX7KZu/sandbox/x3rVzOklqylIpGCaTDGmo2-img-1_1771682446000_na1fn_bm9yb3NoaS1tdXN0ZXJpbmctdjQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2hHOW9HVlRLVzNXVWY4N0JYN0tadS9zYW5kYm94L3gzclZ6T2tscXlsSXBHQ2FUREdtbzItaW1nLTFfMTc3MTY4MjQ0NjAwMF9uYTFmbl9ibTl5YjNOb2FTMXRkWE4wWlhKcGJtY3RkalEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=sLyfCsRKzZMsX6HsnrSIMnGjTslD6Khn3lH8GfIwafyht0JM4GCJddgnZM2VAFpTtA5ZmaY~YTjWLJ1YOM6ImRjBbCARcJ~R7pLgT5zqru0BT6xSGN8KqprYXuKstEWda4aOw3wmU0moYKIfIZUJ5c6xR2-nx-ueuF7ETLby9hIfYfDxzOv8NOpr-sZjr~fXESGRMq4YpyPSna1~gnrUg1Hk3qCmR8PIP-zZxz11LZuFCouIeOHaI~Dtpy-RYpwmQ9F2KtIrrz2TLHAclrYEy6Rsu2l1S~IaJU0lsUniNuSiz4dLYT85F79un3DlB23QqYuwbNWc4ayYazjtCts7ng__";
const IMG_SUIRI_MAP = "https://private-us-east-1.manuscdn.com/sessionFile/khG9oGVTKW3WUf87BX7KZu/sandbox/Qjm0GxQyGXXb2wOpn96jSi-img-2_1771681691000_na1fn_bm9yb3NoaS1zdWlyaS1tYXAtdjI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2hHOW9HVlRLVzNXVWY4N0JYN0tadS9zYW5kYm94L1FqbTBHeFF5R1hYYjJ3T3BuOTZqU2ktaW1nLTJfMTc3MTY4MTY5MTAwMF9uYTFmbl9ibTl5YjNOb2FTMXpkV2x5YVMxdFlYQXRkakkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mGpEsmpjeIbcFC~WVHuzZIurm-pXhr1tTnkWESESQSKOf2WExeyeWZEjU5Zq1ZehMVO5pJfhcPaPwQH4mx7WV98Zy2D4~HYqjMKPXtuJi-6fcqSmWbJ7OQ1le37Wr0l9hiUOiiVct0GKWUrbAgNLxsEi1bMuRDAKEvxUKLKzHN5DrB~6tCBEsFpdF2YgF5HFQu-W~WxIVt6n6HXaF0hWr3bA-30LWIfQ1UGKcx4FAEwhOT-KlvbjOlGu7air6~p-6fs8qRdTC1ziJ3eVDW2SOh~3BTN2DWnXmqZD-lW6SqdAdqMKD7~34Lot0shZB~nttggB1dy9VNGy7vs2d6Z1NQ__";
const IMG_ACTIVITY_RECORD = "https://private-us-east-1.manuscdn.com/sessionFile/khG9oGVTKW3WUf87BX7KZu/sandbox/VWOWMPx0s0jCCVW95aMTEt-img-3_1771679696000_na1fn_bm9yb3NoaS1hY3Rpdml0eS1yZWNvcmQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2hHOW9HVlRLVzNXVWY4N0JYN0tadS9zYW5kYm94L1ZXT1dNUHgwczBqQ0NWVzk1YU1URXQtaW1nLTNfMTc3MTY3OTY5NjAwMF9uYTFmbl9ibTl5YjNOb2FTMWhZM1JwZG1sMGVTMXlaV052Y21RLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AGIngnoOgW9qBBR3S8qZcNvcttcNxy9QsL-HHiPi84DMMzxTGuISEyVDcOWERUBA2KmgboqHlnBDSFmUFLam1lAWHdf2SnMaXeMoQ26lDFKwXmaSt9cj2a9L514RY-WYjLGLen2xkWak~ko7JAjRDsQX0VLmxKMEmdP2PYfgvIoEylEPrxlgUBe5-0ZNLHECvAh6Kd4QQ70c0Ln51OkT-6Tm1-r1ws1aILiutC2vjxTWkRFz9mYRdDT2Xa9PW03HSt78grvbfiw6mp8wh~93PgBEo~BfSSDhY2wJfzZ92sFbpTRpQVajRbjdCmGUIgFS32UxuKDsErwwrmzE8OsaVQ__";
const IMG_FORCED_NOTIFY = "https://private-us-east-1.manuscdn.com/sessionFile/khG9oGVTKW3WUf87BX7KZu/sandbox/x3rVzOklqylIpGCaTDGmo2-img-2_1771682439000_na1fn_bm9yb3NoaS1mb3JjZWQtbm90aWZ5LXYy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva2hHOW9HVlRLVzNXVWY4N0JYN0tadS9zYW5kYm94L3gzclZ6T2tscXlsSXBHQ2FUREdtbzItaW1nLTJfMTc3MTY4MjQzOTAwMF9uYTFmbl9ibTl5YjNOb2FTMW1iM0pqWldRdGJtOTBhV1o1TFhZeS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BGF7RdR18BAlzU5FzNK8KfDExBS2B2hMj88TH6W6VjHwBKI3PwfFQE4pkHWNPO0C9KiIKlnoZeVq6Iii~N8ESAsn5-~wB2vvgUdshs7TsPBF0BBa1-0lcRhC0sTdVGuzhppxzfTKRhf8ZJQxU5wTHm0tq68dP5B8VaOCRfSO5-Ew97hajsb5VKZNHjenBpyVKAquydv0ac~JPff~YSpq-Ei~iLQIP2wK-f3BdWmeMFHeuW4cfU8O7wanbLc~Ndbl8rziGstS6EdkDobq828HJDeSqAwF2ekL4y0it~LN3iNEw~jAXlRNnF5FZySjCPXY35bHa531~v3ZGFRQKi2r7w__";

/* ── Store URLs (公開後に差し替え) ── */
const APP_STORE_URL = "#";
const GOOGLE_PLAY_URL = "#";
const STORE_AVAILABLE = false;

/* ── X (Twitter) URL ── */
const X_URL = "https://x.com/noroshi_app";

/* ── Shared easing ── */
const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const;

/* ── Fade-in animation wrapper ── */
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: EASE_OUT }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Animated counter ── */
function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const numericMatch = value.match(/^([\d,.]+)(.*)/);

  if (!numericMatch) {
    return <span ref={ref}>{value}</span>;
  }

  const numStr = numericMatch[1];
  const textSuffix = numericMatch[2] + suffix;
  const target = parseFloat(numStr.replace(/,/g, ""));
  const hasDecimal = numStr.includes(".");
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      if (hasDecimal) {
        setDisplay(current.toFixed(1));
      } else {
        setDisplay(Math.round(current).toLocaleString());
      }
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, hasDecimal]);

  return (
    <span ref={ref}>
      {display}{textSuffix}
    </span>
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
        <div className="max-w-[1120px] mx-auto px-5 h-[60px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <img src={NOROSHI_LOGO} alt="NOROSHI" className="w-7 h-7 rounded-lg transition-transform duration-200 group-hover:scale-105" />
            <span className="text-[15px] font-bold tracking-[0.08em] text-white">
              NOROSHI
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) =>
              item.isLink ? (
                <Link key={item.label} href={item.href} className="text-[13px] text-[#A8A8A8] hover:text-white transition-colors duration-200">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} className="text-[13px] text-[#A8A8A8] hover:text-white transition-colors duration-200">
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
            className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl pt-[60px]"
          >
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="flex flex-col items-center gap-0 px-6 py-8"
            >
              {navItems.map((item) => {
                const inner = (
                  <span className="block w-full text-center text-[17px] text-[#E5E5E5] py-4 border-b border-white/[0.04] hover:text-white transition-colors">
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
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 via-[#0A0A0A]/30 to-[#0A0A0A]" />
      </div>

      <div className="relative z-10 max-w-[1120px] mx-auto px-5 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF453A] animate-pulse" />
            <span className="text-[12px] text-[#A8A8A8] tracking-wide">
              消防団向け参集・活動支援アプリ
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
          className="text-[clamp(38px,8vw,76px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white mb-6"
        >
          自動架電で、
          <br />
          <span className="text-flame-gradient">絶対起こす。</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: EASE_OUT }}
          className="text-[clamp(15px,2vw,18px)] text-[#A8A8A8] leading-relaxed max-w-[480px] mx-auto mb-10"
        >
          招集から現場活動まで。
          <br className="hidden sm:block" />
          消防団の活動を支えるアプリ。
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE_OUT }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-white rounded-xl btn-flame"
          >
            <Smartphone className="w-4 h-4" />
            アプリをダウンロード
          </a>
          <a
            href="/app/login"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-white rounded-xl btn-ghost"
          >
            Webで使う
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium rounded-xl btn-ghost"
          >
            機能を見る
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}

/* ── Features Section ── */
const features = [
  {
    icon: Phone,
    title: "自動架電",
    description:
      "招集ボタンひとつで、応答があるまで最大30人に自動で電話。プッシュ通知と架電を組み合わせ、最大4段階で確実に届ける。",
    image: null as string | null,
    accent: "from-[#FF453A] to-[#FF9F0A]",
  },
  {
    icon: Bell,
    title: "エスカレーション通知",
    description:
      "プッシュ通知で応答がなければ自動で架電にエスカレーション。段階数・間隔・手段はカスタマイズ可能。あなたのスタイルに合わせた通知設定を。",
    image: IMG_FORCED_NOTIFY as string | null,
    accent: "from-[#FF453A] to-[#FF9F0A]",
  },
  {
    icon: Radio,
    title: "情報共有",
    description:
      "誰が来るか、どこにいるか。参集から活動終了まで共有。林野火災や山岳事案の対応にも活用。",
    image: IMG_MUSTERING as string | null,
    accent: "from-[#FF9F0A] to-[#FF453A]",
  },
  {
    icon: MapPin,
    title: "水利マップ",
    description:
      "GPS精度で水利を登録。隣の分団の水利情報も見える。全国の消防団員と水利ネットワークを構築。台帳のインポート・エクスポートにも対応。",
    image: IMG_SUIRI_MAP as string | null,
    accent: "from-[#32ADE6] to-[#0A84FF]",
  },
  {
    icon: FileText,
    title: "ハザード情報",
    description:
      "政府公式の防災情報フィードをアプリに集約。洪水浸水想定区域・土砂災害警戒区域をマップにオーバーレイ表示。",
    image: null as string | null,
    accent: "from-[#FF6B6B] to-[#EE5A24]",
  },
  {
    icon: FileText,
    title: "出動記録",
    description:
      "招集から自動で出動記録を生成。種別・場所・参加者が自動入力。",
    image: IMG_ACTIVITY_RECORD as string | null,
    accent: "from-[#A8A8A8] to-[#666666]",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-16 relative">
      <div className="max-w-[1120px] mx-auto px-5">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">
              機能
            </span>
            <h2 className="section-heading text-[clamp(26px,4vw,40px)] mb-4">
              深夜の火災、あなたの分団は何人集まる？
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.06}>
              <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden card-glow h-full">
                {feature.image && (
                  <div className="relative h-44 md:h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
                  </div>
                )}
                <div className={`p-6 ${!feature.image ? "pt-8" : ""}`}>
                  <div
                    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${feature.accent} flex items-center justify-center mb-3.5`}
                  >
                    <feature.icon className="w-[18px] h-[18px] text-white" />
                  </div>
                  <h3 className="text-[18px] font-bold text-white mb-2 tracking-[-0.01em]">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] text-[#888] leading-[1.7]">
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
      <div className="max-w-[1120px] mx-auto px-5">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "4段階", label: "エスカレーション通知" },
              { value: "1回最大30人", label: "同時架電対応" },
              { value: "3D地図", label: "航空写真と地形データで現場判断を支援" },
              { value: "全国共有", label: "水利データは自治体を超えて全消防団員で共有" },
            ].map((stat) => (
              <div key={stat.value}>
                <div className="text-[clamp(24px,3.5vw,36px)] font-bold text-flame-gradient mb-1.5">
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="text-[11px] text-[#666] leading-relaxed max-w-[160px] mx-auto">{stat.label}</div>
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
      "招集受信・応答（プッシュ通知）",
      "参集ダッシュボード閲覧",
      "位置情報共有",
      "水利マップ閲覧",
      "出動記録閲覧",
    ],
    cta: "無料ではじめる",
    highlighted: false,
  },
  {
    name: "NOROSHI Pro",
    price: "¥1,000",
    period: "/月",
    description: "全機能をアンロック",
    subNote: "年額 ¥10,000",
    features: [
      "無料プランの全機能",
      "招集発信・自動架電",
      "エスカレーション通知設定",
      "水利の登録・編集・点検",
      "台帳インポート・エクスポート",
      "出動記録の作成・編集",
      "メンバー管理・招待",
    ],
    cta: "NOROSHI Proをはじめる",
    highlighted: true,
  },
];

function PricingSection() {
  return (
    <section id="pricing" className="py-16 relative">
      <div className="max-w-[1120px] mx-auto px-5">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">
              料金
            </span>
            <h2 className="section-heading text-[clamp(26px,4vw,40px)] mb-3">
              現場に必要な機能をあなたの手に。
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[720px] mx-auto">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.08}>
              <div
                className={`relative rounded-2xl border p-6 flex flex-col h-full ${
                  plan.highlighted
                    ? "border-[#FF453A]/25 bg-gradient-to-b from-[#FF453A]/[0.04] to-white/[0.02] ring-1 ring-[#FF453A]/10"
                    : "border-white/[0.06] bg-white/[0.02]"
                } card-glow`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#FF453A] to-[#FF9F0A] text-[11px] font-semibold text-white whitespace-nowrap">
                    おすすめ
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="text-[15px] font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[32px] font-bold text-white tracking-tight">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-[13px] text-[#666]">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-[13px] text-[#666] mt-1.5">{plan.description}</p>
                  {plan.subNote && (
                    <p className="text-[12px] text-[#FF9F0A]/70 mt-1">{plan.subNote}</p>
                  )}
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#FF9F0A] mt-[3px] shrink-0" />
                      <span className="text-[13px] text-[#999] leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl text-[14px] font-semibold transition-all ${
                    plan.highlighted
                      ? "btn-flame text-white"
                      : "btn-ghost"
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
          <p className="text-center text-[12px] text-[#444] mt-8">
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
      icon: Shield,
      title: "行レベルセキュリティ",
      description: "データは自治体単位で完全に分離。他の自治体のデータにはアクセスできない設計。",
    },
    {
      icon: Server,
      title: "データ管理",
      description: "すべてのデータは東京リージョンの日本国内サーバーに保存。海外へのデータ転送なし。",
    },
    {
      icon: Lock,
      title: "プライバシーの確保",
      description: "位置情報の共有は出動応答時のみ。電話番号の公開範囲も自分で設定可能。デフォルトは非公開。",
    },
  ];

  return (
    <section className="py-14 relative">
      <div className="max-w-[1120px] mx-auto px-5">
        <FadeIn>
          <div className="text-center mb-10">
            <span className="section-label mb-4 block">
              セキュリティ
            </span>
            <h2 className="section-heading text-[clamp(26px,4vw,40px)]">
              データの扱い
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[900px] mx-auto">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 card-glow">
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4">
                  <item.icon className="w-[18px] h-[18px] text-[#777]" />
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#888] leading-[1.7]">
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
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF453A]/[0.02] to-transparent" />
      <div className="relative max-w-[1120px] mx-auto px-5 text-center">
        <FadeIn>
          <h2 className="section-heading text-[clamp(26px,5vw,44px)] mb-4">
            参集、水利管理、活動支援。
            <br className="sm:hidden" />
            すべてを、ひとつに。
          </h2>
          <p className="text-[15px] text-[#888] max-w-[420px] mx-auto mb-10">
            あなたの分団を、次の出動から変える。
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-semibold text-white rounded-xl btn-flame"
          >
            はじめる
            <ArrowRight className="w-4 h-4" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <img src={NOROSHI_LOGO} alt="NOROSHI" className="w-6 h-6 rounded-md" />
              <span className="text-[14px] font-bold tracking-[0.08em] text-white">
                NOROSHI
              </span>
            </div>
            <p className="text-[13px] text-[#555] leading-relaxed max-w-[280px]">
              消防団向け参集・活動支援アプリ
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.12em] text-[#555] mb-3.5 uppercase">
              プロダクト
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#features" className="text-[13px] text-[#777] hover:text-white transition-colors duration-200">
                  機能
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-[13px] text-[#777] hover:text-white transition-colors duration-200">
                  料金
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.12em] text-[#555] mb-3.5 uppercase">
              法的情報
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy" className="text-[13px] text-[#777] hover:text-white transition-colors duration-200">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[13px] text-[#777] hover:text-white transition-colors duration-200">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/tokushoho" className="text-[13px] text-[#777] hover:text-white transition-colors duration-200">
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.12em] text-[#555] mb-3.5 uppercase">
              連絡先
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/contact"
                  className="text-[13px] text-[#777] hover:text-white transition-colors duration-200"
                >
                  お問い合わせフォーム
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@noroshitech.com"
                  className="text-[13px] text-[#777] hover:text-white transition-colors duration-200"
                >
                  info@noroshitech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-6">
          <p className="text-[11px] text-[#333]">
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
