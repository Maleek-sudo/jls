export default function Pagination({ current, total, onChange }) {
  if (total <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-14">

      {/* Prev */}
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="w-9 h-9 flex items-center justify-center border border-[#e5e5e5] text-[#6b6b6b] hover:border-[#111111] hover:text-[#111111] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200 text-sm"
      >
        ←
      </button>

      {/* Page numbers */}
      {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-9 h-9 flex items-center justify-center text-sm font-medium transition-colors duration-200 ${
            current === p
              ? "bg-[#111111] text-white border border-[#111111]"
              : "border border-[#e5e5e5] text-[#6b6b6b] hover:border-[#111111] hover:text-[#111111]"
          }`}
        >
          {p}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="w-9 h-9 flex items-center justify-center border border-[#e5e5e5] text-[#6b6b6b] hover:border-[#111111] hover:text-[#111111] disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200 text-sm"
      >
        →
      </button>
    </div>
  );
}