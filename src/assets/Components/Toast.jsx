
export default function Toast({ message, visible }) {
    return (
        <div
            className={`fixed bottom-6 right-6 z-[999] flex items-center gap-3 bg-white border border-[#e5e5e5] shadow-lg px-5 py-3.5 text-sm font-medium text-[#111111] transition-all duration-300 ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
        >
            <span className="w-5 h-5 rounded-full bg-[#1a3a3a] flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
            </span>
            {message}
        </div>
    );
}