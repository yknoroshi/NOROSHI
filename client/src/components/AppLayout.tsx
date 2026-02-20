/*
 * App Layout — Persistent sidebar navigation for /app/* routes
 * NOROSHI Void Interface: dark sidebar, subtle borders, flame accents
 */

import { Link, useLocation } from "wouter";
import {
  LayoutDashboard,
  Map,
  Droplets,
  FileText,
  Zap,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/app/dashboard", label: "ダッシュボード", icon: LayoutDashboard },
  { href: "/app/map", label: "地図", icon: Map },
  { href: "/app/water", label: "水利管理", icon: Droplets },
  { href: "/app/records", label: "出動記録", icon: FileText },
];

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function AppLayout({ children, title }: AppLayoutProps) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex">
      {/* Sidebar — desktop */}
      <aside className="hidden lg:flex flex-col w-[240px] border-r border-white/[0.06] bg-[#0A0A0A] fixed inset-y-0 left-0 z-40">
        <div className="h-16 flex items-center px-5 border-b border-white/[0.06]">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FF453A] to-[#FF9F0A] flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-[14px] font-bold tracking-[0.08em] text-white">
              NOROSHI
            </span>
          </Link>
        </div>

        <nav className="flex-1 py-4 px-3">
          <div className="space-y-1">
            {navItems.map((item) => {
              const active = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] transition-colors ${
                    active
                      ? "bg-white/[0.06] text-white font-medium"
                      : "text-[#888] hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <item.icon className={`w-[18px] h-[18px] ${active ? "text-[#FF9F0A]" : ""}`} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="p-3 border-t border-white/[0.06]">
          <button
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] text-[#666] hover:text-white hover:bg-white/[0.03] transition-colors w-full"
            onClick={() => {
              // Placeholder: will integrate Supabase auth
              window.location.href = "/";
            }}
          >
            <LogOut className="w-[18px] h-[18px]" />
            ログアウト
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar — mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[260px] bg-[#0A0A0A] border-r border-white/[0.06] transform transition-transform duration-200 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-5 border-b border-white/[0.06]">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FF453A] to-[#FF9F0A] flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-[14px] font-bold tracking-[0.08em] text-white">
              NOROSHI
            </span>
          </Link>
          <button onClick={() => setMobileOpen(false)} className="text-[#888] hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="py-4 px-3">
          <div className="space-y-1">
            {navItems.map((item) => {
              const active = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] transition-colors ${
                    active
                      ? "bg-white/[0.06] text-white font-medium"
                      : "text-[#888] hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <item.icon className={`w-[18px] h-[18px] ${active ? "text-[#FF9F0A]" : ""}`} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:ml-[240px]">
        {/* Top bar */}
        <header className="h-16 border-b border-white/[0.06] flex items-center px-5 sticky top-0 bg-[#0A0A0A]/80 backdrop-blur-xl z-30">
          <button
            className="lg:hidden mr-4 text-[#888] hover:text-white"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-[16px] font-semibold text-white">{title}</h1>
        </header>

        {/* Page content */}
        <main className="p-5 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
