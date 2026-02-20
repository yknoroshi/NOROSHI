/*
 * /app/dashboard — リアルタイム参集状況ダッシュボード
 * Void Interface: dark cards, status colors, subtle glow
 * NOTE: Supabase Realtime未接続。UIモックとして構築。
 */

import AppLayout from "@/components/AppLayout";
import { Phone, Clock, Users, AlertTriangle } from "lucide-react";

const statusColors: Record<string, { bg: string; text: string; label: string }> = {
  responded: { bg: "bg-[#4CAF50]/10", text: "text-[#4CAF50]", label: "応答済み" },
  moving: { bg: "bg-[#FF9F0A]/10", text: "text-[#FF9F0A]", label: "移動中" },
  arrived: { bg: "bg-[#0A84FF]/10", text: "text-[#0A84FF]", label: "到着" },
  declined: { bg: "bg-white/[0.03]", text: "text-[#666]", label: "辞退" },
  pending: { bg: "bg-white/[0.03]", text: "text-[#555]", label: "未応答" },
};

const mockMembers = [
  { name: "田中 太郎", status: "arrived", time: "3分前" },
  { name: "佐藤 花子", status: "moving", time: "5分前" },
  { name: "鈴木 一郎", status: "responded", time: "2分前" },
  { name: "高橋 美咲", status: "pending", time: "—" },
  { name: "伊藤 健太", status: "declined", time: "4分前" },
  { name: "渡辺 裕子", status: "moving", time: "6分前" },
];

export default function AppDashboard() {
  return (
    <AppLayout title="ダッシュボード">
      {/* Alert banner (mock) */}
      <div className="mb-8 p-5 rounded-xl border border-[#FF453A]/20 bg-[#FF453A]/[0.04]">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF453A] to-[#FF9F0A] flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-[16px] font-semibold text-white mb-1">
              招集発令中
            </h2>
            <p className="text-[14px] text-[#999]">
              発信者: 田中 太郎 — 2026/02/20 03:42
            </p>
            <p className="text-[13px] text-[#666] mt-1">
              建物火災 — 広島市中区○○町1-2-3付近
            </p>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Users, label: "対象人数", value: "6", color: "text-white" },
          { icon: Phone, label: "応答済み", value: "4", color: "text-[#4CAF50]" },
          { icon: Clock, label: "移動中", value: "2", color: "text-[#FF9F0A]" },
          { icon: AlertTriangle, label: "未応答", value: "1", color: "text-[#666]" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="p-5 rounded-xl border border-white/[0.06] bg-[#111]"
          >
            <stat.icon className="w-5 h-5 text-[#555] mb-3" />
            <div className={`text-[28px] font-bold ${stat.color} mb-1`}>
              {stat.value}
            </div>
            <div className="text-[12px] text-[#666]">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Member cards */}
      <h3 className="text-[14px] font-semibold text-[#888] mb-4 tracking-wide uppercase">
        Members
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockMembers.map((member) => {
          const s = statusColors[member.status];
          return (
            <div
              key={member.name}
              className="p-5 rounded-xl border border-white/[0.06] bg-[#111] card-glow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[15px] font-medium text-white">
                  {member.name}
                </span>
                <span className="text-[12px] text-[#555]">{member.time}</span>
              </div>
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-md text-[12px] font-medium ${s.bg} ${s.text}`}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Placeholder notice */}
      <div className="mt-12 p-4 rounded-lg border border-white/[0.04] bg-white/[0.02] text-center">
        <p className="text-[13px] text-[#555]">
          このダッシュボードはUIプレビューです。Supabase連携後にリアルタイムデータが表示されます。
        </p>
      </div>
    </AppLayout>
  );
}
