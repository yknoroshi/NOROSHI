/*
 * Legal page layout — consistent dark styling for /privacy, /terms, /tokushoho
 * Matches NOROSHI Void Interface design language
 */

import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const NOROSHI_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663250854362/evYsEPHmdLSUaZki.png";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5]">
      {/* Header */}
      <header className="border-b border-white/[0.06]">
        <div className="max-w-[720px] mx-auto px-5 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2.5">
            <img src={NOROSHI_LOGO} alt="NOROSHI" className="w-7 h-7 rounded-lg" />
            <span className="text-[15px] font-bold tracking-[0.08em] text-white">
              NOROSHI
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[720px] mx-auto px-5 py-12 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[14px] text-[#666] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          NOROSHI トップ
        </Link>

        <h1
          className="text-[28px] font-bold tracking-[-0.02em] text-white mb-2"
          style={{ fontFamily: "'Noto Sans JP', system-ui, sans-serif" }}
        >
          {title}
        </h1>
        <p className="text-[14px] text-[#666] mb-12">最終更新日: {lastUpdated}</p>

        <div className="legal-content space-y-8 text-[15px] leading-[1.8] text-[#B0B0B0]">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-8">
        <div className="max-w-[720px] mx-auto px-5 text-center">
          <p className="text-[12px] text-[#444]">
            &copy; 2026 NOROSHI Tech. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
