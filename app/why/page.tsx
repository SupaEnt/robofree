// app/why/page.tsx
import Link from "next/link";

export default function Why() {
  return (
    <div className="min-h-screen bg-emerald-50 px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-5xl font-light mb-12 text-emerald-950">Why RoboFree</h1>
      <div className="prose prose-emerald text-lg leading-relaxed font-light">
        <p>We are not against progress. We are for humanity.</p>
        <p>In the coming years billions of robots will walk beside us, think for us, and slowly replace the quiet joys of real life. Some welcome that future. Others feel their souls quietly whispering “not yet.”</p>
        <p>RoboFree is a gentle return to what makes us feel most alive: soil under our feet, hands working together, evenings filled with laughter instead of screens.</p>
        <p>Inspired by the Israeli kibbutz I once visited, we are building small, self-sustaining communities where technology serves only when truly needed and nature is never second place.</p>
        <p>This is not escape. This is remembering who we are.</p>
      </div>

      <div className="mt-16 flex gap-4">
        <Link href="/" className="text-emerald-700 hover:underline">← Back to Home</Link>
        <Link href="/join" className="px-6 py-3 bg-emerald-700 text-white rounded-3xl">Join us</Link>
      </div>
    </div>
  );
}