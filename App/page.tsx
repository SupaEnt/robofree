// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col">
      {/* Hero */}
      <div className="flex-1 flex items-center justify-center bg-[radial-gradient(at_bottom_right,#052014_0%,#f1f8f3_70%)] text-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-7xl font-light tracking-tighter text-emerald-950 mb-6">
            RoboFree
          </h1>
          <p className="text-3xl text-emerald-800 font-light leading-tight mb-8">
            A warm community of people choosing simple, human lives —<br />
            away from robots, screens, and the rush of tomorrow.
          </p>
          <p className="text-2xl text-emerald-700 mb-12">Nature. Real connection. Freedom.</p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/why" className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xl rounded-3xl transition">
              Why RoboFree
            </Link>
            <Link href="/join" className="px-8 py-4 border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-100 text-xl rounded-3xl transition">
              Join the movement
            </Link>
          </div>
        </div>
      </div>

      {/* Simple nav */}
      <nav className="py-6 text-center border-t border-emerald-100">
        <Link href="/" className="mx-4 text-emerald-700 hover:text-emerald-950">Home</Link>
        <Link href="/why" className="mx-4 text-emerald-700 hover:text-emerald-950">Why</Link>
        <Link href="/faq" className="mx-4 text-emerald-700 hover:text-emerald-950">FAQ</Link>
        <Link href="/join" className="mx-4 text-emerald-700 hover:text-emerald-950">Join &amp; Support</Link>
      </nav>
    </div>
  );
}