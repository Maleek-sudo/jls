const categories = [
  "All", "Track Suit", "Cap", "Denim Jean",
  "Tank Top", "Armless", "Top", "Long Sleeve", "Jersey", "Slides", "Socks",
];

export default function CategoryTabs({ active, onChange }) {
  return (
    <div className="w-full bg-white border-b border-[#e5e5e5] sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={`
                shrink-0 px-5 py-[14px] text-sm font-medium whitespace-nowrap
                transition-all duration-200 border-b-2
                ${active === cat
                  ? "border-[#111111] text-[#111111]"
                  : "border-transparent text-[#9a9a9a] hover:text-[#111111] hover:border-[#d5d5d5]"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}