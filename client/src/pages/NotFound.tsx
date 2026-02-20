import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <div className="text-center px-5">
        <div className="text-[72px] font-bold text-flame-gradient mb-4">404</div>
        <h1 className="text-[24px] font-bold text-white mb-3">
          ページが見つかりません
        </h1>
        <p className="text-[15px] text-[#666] mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-semibold text-white rounded-xl btn-flame"
        >
          <ArrowLeft className="w-4 h-4" />
          トップに戻る
        </Link>
      </div>
    </div>
  );
}
