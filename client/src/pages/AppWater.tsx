/*
 * /app/water — 水利管理（一覧・登録・CSV一括登録）
 * NOTE: Supabase未接続。UIモックとして構築。
 */

import AppLayout from "@/components/AppLayout";
import { Plus, Upload, Search, MapPin, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const typeLabels: Record<string, string> = {
  hydrant: "消火栓",
  cistern: "防火水槽",
  natural: "自然水利",
  tank: "貯水槽",
  other: "その他",
};

const typeColors: Record<string, string> = {
  hydrant: "text-[#32ADE6]",
  cistern: "text-[#32ADE6]",
  natural: "text-[#32ADE6]",
  tank: "text-[#32ADE6]",
  other: "text-[#888]",
};

const mockWaterSources = [
  { id: 1, type: "hydrant", name: "消火栓 #001", address: "広島市中区○○町1-2", lat: 34.3853, lng: 132.4553, memo: "地下式" },
  { id: 2, type: "cistern", name: "防火水槽 #012", address: "広島市中区△△町3-4", lat: 34.3862, lng: 132.4571, memo: "40t" },
  { id: 3, type: "natural", name: "太田川（取水点）", address: "広島市中区河岸", lat: 34.3901, lng: 132.4502, memo: "" },
  { id: 4, type: "hydrant", name: "消火栓 #002", address: "広島市中区□□町5-6", lat: 34.3845, lng: 132.4590, memo: "地上式" },
  { id: 5, type: "tank", name: "貯水槽 #003", address: "広島市中区◇◇町7-8", lat: 34.3878, lng: 132.4530, memo: "100t" },
];

export default function AppWater() {
  const [search, setSearch] = useState("");

  const filtered = mockWaterSources.filter(
    (ws) =>
      ws.name.includes(search) ||
      ws.address.includes(search) ||
      typeLabels[ws.type].includes(search)
  );

  return (
    <AppLayout title="水利管理">
      {/* Action bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-[360px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#555]" />
          <input
            type="text"
            placeholder="水利を検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-white/[0.08] bg-white/[0.03] text-[14px] text-white placeholder:text-[#555] focus:outline-none focus:border-[#32ADE6]/40"
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/[0.08] text-[13px] text-[#888] hover:text-white hover:bg-white/[0.03] transition-colors"
            onClick={() => toast("CSV一括登録機能は準備中です")}
          >
            <Upload className="w-4 h-4" />
            CSV登録
          </button>
          <button
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-semibold text-white bg-[#32ADE6] hover:bg-[#32ADE6]/80 transition-colors"
            onClick={() => toast("水利登録機能は準備中です")}
          >
            <Plus className="w-4 h-4" />
            新規登録
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-white/[0.06] bg-[#111] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-[14px]">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="text-left py-3 px-5 text-[12px] font-semibold text-[#666] tracking-wide">
                  種別
                </th>
                <th className="text-left py-3 px-5 text-[12px] font-semibold text-[#666] tracking-wide">
                  名称
                </th>
                <th className="text-left py-3 px-5 text-[12px] font-semibold text-[#666] tracking-wide hidden md:table-cell">
                  住所
                </th>
                <th className="text-left py-3 px-5 text-[12px] font-semibold text-[#666] tracking-wide hidden lg:table-cell">
                  メモ
                </th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((ws) => (
                <tr
                  key={ws.id}
                  className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-3.5 px-5">
                    <span className={`text-[13px] font-medium ${typeColors[ws.type]}`}>
                      {typeLabels[ws.type]}
                    </span>
                  </td>
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#555]" />
                      <span className="text-white">{ws.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-5 text-[#888] hidden md:table-cell">
                    {ws.address}
                  </td>
                  <td className="py-3.5 px-5 text-[#666] hidden lg:table-cell">
                    {ws.memo || "—"}
                  </td>
                  <td className="py-3.5 px-3">
                    <button className="p-1.5 rounded-md hover:bg-white/[0.04] text-[#555] hover:text-white transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-[14px] text-[#555]">
                    該当する水利が見つかりません
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 text-[12px] text-[#555]">
        {filtered.length} 件の水利
      </div>

      {/* Placeholder notice */}
      <div className="mt-8 p-4 rounded-lg border border-white/[0.04] bg-white/[0.02] text-center">
        <p className="text-[13px] text-[#555]">
          水利データはUIプレビューです。Supabase連携後に実データが表示されます。
        </p>
      </div>
    </AppLayout>
  );
}
