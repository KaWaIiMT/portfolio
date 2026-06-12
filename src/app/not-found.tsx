import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="text-xs tracking-[0.2em] uppercase text-white/20 font-sans mb-6">
        404
      </p>
      <h1 className="font-cn text-3xl md:text-4xl font-bold text-white/80 mb-4">
        页面不存在
      </h1>
      <p className="text-sm text-white/30 max-w-md mb-8 font-sans">
        你访问的页面可能已被移动或删除。
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                   border border-white/[0.08] text-sm text-white/50
                   hover:text-white hover:border-white/20 hover:bg-white/[0.04]
                   transition-all duration-300 font-sans"
      >
        ← 返回首页
      </Link>
    </main>
  );
}
