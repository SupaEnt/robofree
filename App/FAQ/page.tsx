// app/faq/page.tsx
import Link from "next/link";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-emerald-50 px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-5xl font-light mb-12 text-emerald-950">FAQ</h1>
      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-medium mb-2">What is RoboFree exactly?</h3>
          <p className="text-emerald-700">A growing movement of people who want to live more simply and more humanly as robots become part of everyday life.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Do I have to move to a community right away?</h3>
          <p className="text-emerald-700">No. You can support the vision, join the updates, visit when we open the first land, or simply live more intentionally wherever you are.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Where will the communities be?</h3>
          <p className="text-emerald-700">We are starting in Italy with plans to grow wherever people feel the same pull — always close to nature.</p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Is this anti-technology?</h3>
          <p className="text-emerald-700">Not at all. It’s pro-human. We use what helps us; we simply refuse to let machines replace the things that make life meaningful.</p>
        </div>
      </div>

      <Link href="/" className="mt-16 inline-block text-emerald-700 hover:underline">← Back to Home</Link>
    </div>
  );
}