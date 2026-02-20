/*
 * /app/map — 地図表示（水利マーカー + 団員位置）
 * NOTE: Supabase未接続。Leaflet/Mapbox未統合。UIモックとして構築。
 */

import AppLayout from "@/components/AppLayout";
import { MapPin, Droplets, Users, Flame, Layers } from "lucide-react";

const mockWaterSources = [
  { type: "消火栓", count: 24, icon: "○", color: "#32ADE6" },
  { type: "防火水槽", count: 8, icon: "□", color: "#32ADE6" },
  { type: "自然水利", count: 3, icon: "〜", color: "#32ADE6" },
  { type: "貯水槽", count: 5, icon: "□+", color: "#32ADE6" },
];

export default function AppMap() {
  return (
    <AppLayout title="地図">
      {/* Map placeholder */}
      <div className="relative rounded-xl border border-white/[0.06] bg-[#111] overflow-hidden" style={{ height: "calc(100vh - 180px)" }}>
        {/* Simulated dark map background */}
        <div className="absolute inset-0 bg-[#0D0D0D]">
          {/* Grid pattern to simulate map tiles */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Simulated fire point */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-6 h-6 rounded-full bg-[#FF453A] animate-ping absolute opacity-30" />
              <div className="w-6 h-6 rounded-full bg-[#FF453A] flex items-center justify-center relative">
                <Flame className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>

          {/* Simulated water source markers */}
          {[
            { top: "35%", left: "30%" },
            { top: "55%", left: "65%" },
            { top: "25%", left: "55%" },
            { top: "65%", left: "40%" },
            { top: "45%", left: "75%" },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-5 h-5 rounded-full bg-[#32ADE6]/20 border border-[#32ADE6]/40 flex items-center justify-center"
              style={{ top: pos.top, left: pos.left }}
            >
              <Droplets className="w-3 h-3 text-[#32ADE6]" />
            </div>
          ))}

          {/* Simulated member markers */}
          {[
            { top: "40%", left: "45%", name: "田中" },
            { top: "50%", left: "55%", name: "佐藤" },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{ top: pos.top, left: pos.left }}
            >
              <div className="w-5 h-5 rounded-full bg-[#FF9F0A]/20 border border-[#FF9F0A]/40 flex items-center justify-center">
                <Users className="w-3 h-3 text-[#FF9F0A]" />
              </div>
              <span className="text-[10px] text-[#FF9F0A] mt-1">{pos.name}</span>
            </div>
          ))}

          {/* Center label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-6 text-center">
            <span className="text-[11px] text-[#FF453A] font-medium">火点</span>
          </div>
        </div>

        {/* Map controls overlay */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="w-9 h-9 rounded-lg border border-white/[0.08] bg-[#0A0A0A]/80 backdrop-blur flex items-center justify-center text-[#888] hover:text-white transition-colors">
            <Layers className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-lg border border-white/[0.08] bg-[#0A0A0A]/80 backdrop-blur flex items-center justify-center text-[#888] hover:text-white transition-colors">
            <MapPin className="w-4 h-4" />
          </button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 p-4 rounded-xl border border-white/[0.06] bg-[#0A0A0A]/90 backdrop-blur">
          <h4 className="text-[11px] font-semibold text-[#888] mb-3 tracking-wide">
            凡例
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF453A]" />
              <span className="text-[12px] text-[#999]">火点</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#32ADE6]" />
              <span className="text-[12px] text-[#999]">水利</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF9F0A]" />
              <span className="text-[12px] text-[#999]">団員</span>
            </div>
          </div>
        </div>
      </div>

      {/* Water source summary */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {mockWaterSources.map((ws) => (
          <div
            key={ws.type}
            className="p-4 rounded-xl border border-white/[0.06] bg-[#111]"
          >
            <div className="text-[20px] font-bold text-[#32ADE6] mb-1">
              {ws.count}
            </div>
            <div className="text-[12px] text-[#666]">{ws.type}</div>
          </div>
        ))}
      </div>

      {/* Placeholder notice */}
      <div className="mt-8 p-4 rounded-lg border border-white/[0.04] bg-white/[0.02] text-center">
        <p className="text-[13px] text-[#555]">
          地図はUIプレビューです。Leaflet/Mapbox統合後に実際の地図タイルが表示されます。
        </p>
      </div>
    </AppLayout>
  );
}
