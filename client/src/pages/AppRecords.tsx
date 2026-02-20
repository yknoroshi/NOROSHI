/*
 * /app/records — 出動記録（タイムラインUI）
 * NOTE: Supabase未接続。UIモックとして構築。
 */

import AppLayout from "@/components/AppLayout";
import { Download, Filter, Calendar, Clock } from "lucide-react";
import { toast } from "sonner";

const eventColors: Record<string, { dot: string; text: string }> = {
  fire: { dot: "bg-[#FF453A]", text: "text-[#FF453A]" },
  call: { dot: "bg-[#32ADE6]", text: "text-[#32ADE6]" },
  moving: { dot: "bg-[#FF9F0A]", text: "text-[#FF9F0A]" },
  arrived: { dot: "bg-[#558B2F]", text: "text-[#558B2F]" },
  completed: { dot: "bg-[#8E8E93]", text: "text-[#8E8E93]" },
  declined: { dot: "bg-[#8E8E93]", text: "text-[#8E8E93]" },
};

const mockRecords = [
  {
    id: 1,
    date: "2026/02/20",
    type: "建物火災",
    location: "広島市中区○○町1-2-3",
    timeline: [
      { time: "03:42", event: "fire", label: "火災覚知" },
      { time: "03:42", event: "call", label: "自動架電開始（6名）" },
      { time: "03:44", event: "moving", label: "田中 太郎 — 出動" },
      { time: "03:45", event: "moving", label: "佐藤 花子 — 出動" },
      { time: "03:46", event: "declined", label: "高橋 美咲 — 辞退" },
      { time: "03:55", event: "arrived", label: "田中 太郎 — 現場到着" },
      { time: "04:02", event: "arrived", label: "佐藤 花子 — 現場到着" },
      { time: "05:30", event: "completed", label: "活動終了" },
    ],
  },
  {
    id: 2,
    date: "2026/02/18",
    type: "林野火災",
    location: "広島市安佐北区△△町",
    timeline: [
      { time: "14:15", event: "fire", label: "火災覚知" },
      { time: "14:15", event: "call", label: "自動架電開始（8名）" },
      { time: "14:18", event: "moving", label: "鈴木 一郎 — 出動" },
      { time: "14:35", event: "arrived", label: "鈴木 一郎 — 現場到着" },
      { time: "16:45", event: "completed", label: "活動終了" },
    ],
  },
];

export default function AppRecords() {
  return (
    <AppLayout title="出動記録">
      {/* Action bar */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/[0.08] text-[13px] text-[#888] hover:text-white hover:bg-white/[0.03] transition-colors">
            <Filter className="w-4 h-4" />
            フィルター
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/[0.08] text-[13px] text-[#888] hover:text-white hover:bg-white/[0.03] transition-colors">
            <Calendar className="w-4 h-4" />
            期間
          </button>
        </div>
        <button
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/[0.08] text-[13px] text-[#888] hover:text-white hover:bg-white/[0.03] transition-colors"
          onClick={() => toast("CSV/PDFエクスポート機能は準備中です")}
        >
          <Download className="w-4 h-4" />
          エクスポート
        </button>
      </div>

      {/* Records */}
      <div className="space-y-8">
        {mockRecords.map((record) => (
          <div
            key={record.id}
            className="rounded-xl border border-white/[0.06] bg-[#111] overflow-hidden"
          >
            {/* Record header */}
            <div className="p-5 border-b border-white/[0.04]">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-[13px] font-semibold ${eventColors.fire.text}`}>
                      {record.type}
                    </span>
                    <span className="text-[12px] text-[#555]">{record.date}</span>
                  </div>
                  <p className="text-[14px] text-[#888]">{record.location}</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="p-5">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.06]" />

                <div className="space-y-4">
                  {record.timeline.map((event, i) => {
                    const ec = eventColors[event.event];
                    return (
                      <div key={i} className="flex items-start gap-4 relative">
                        <div
                          className={`w-[15px] h-[15px] rounded-full ${ec.dot} shrink-0 mt-0.5 relative z-10 border-2 border-[#111]`}
                        />
                        <div className="flex items-baseline gap-3">
                          <span className="text-[12px] text-[#555] font-mono w-[42px] shrink-0">
                            {event.time}
                          </span>
                          <span className={`text-[14px] ${ec.text}`}>
                            {event.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder notice */}
      <div className="mt-8 p-4 rounded-lg border border-white/[0.04] bg-white/[0.02] text-center">
        <p className="text-[13px] text-[#555]">
          出動記録はUIプレビューです。Supabase連携後に実データが表示されます。
        </p>
      </div>
    </AppLayout>
  );
}
