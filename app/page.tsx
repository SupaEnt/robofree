import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col">
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="RoboFree community"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-7xl font-light tracking-tighter text-white mb-6">RoboFree</h1>
          <p className="text-3xl text-white/90 font-light leading-tight mb-8">
            A warm community of people choosing simple, human lives —<br />
            away from robots, screens, and the rush of tomorrow.
          </p>
          <p className="text-2xl text-white/80 mb-12">Nature. Real connection. Freedom.</p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/why" className="px-10 py-5 bg-white text-emerald-900 text-xl rounded-3xl hover:bg-emerald-100 transition">Why RoboFree</Link>
            <Link href="/join" className="px-10 py-5 border-2 border-white text-white text-xl rounded-3xl hover:bg-white/10 transition">Join the movement</Link>
          </div>
        </div>
      </div>

      <nav className="py-6 text-center bg-white border-t">
        <Link href="/" className="mx-5 text-emerald-700 hover:text-emerald-900">Home</Link>
        <Link href="/why" className="mx-5 text-emerald-700 hover:text-emerald-900">Why</Link>
        <Link href="/faq" className="mx-5 text-emerald-700 hover:text-emerald-900">FAQ</Link>
        <Link href="/join" className="mx-5 text-emerald-700 hover:text-emerald-900">Join & Support</Link>
      </nav>
    </div>
  );
}
