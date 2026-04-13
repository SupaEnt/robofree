// app/join/page.tsx
export default function Join() {
  return (
    <div className="min-h-screen bg-emerald-50 px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-5xl font-light mb-8 text-emerald-950">Join &amp; Support</h1>
      <p className="text-xl text-emerald-700 mb-10">The future doesn’t have to feel cold.</p>
      
      <div className="bg-white rounded-3xl shadow-sm p-10">
        <p className="text-lg mb-8">If RoboFree speaks to your heart, there are three beautiful ways to begin:</p>
        
        <ol className="space-y-8 text-lg">
          <li>1. Add your email below for gentle updates and early invitations.</li>
          <li>2. Message me directly on WhatsApp (link coming soon).</li>
          <li>3. Become a founding supporter — every euro helps us secure the first piece of land.</li>
        </ol>

        {/* Simple email form placeholder */}
        <div className="mt-12">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="w-full px-6 py-5 rounded-3xl border border-emerald-200 focus:border-emerald-700 outline-none text-lg"
          />
          <button className="mt-4 w-full py-5 bg-emerald-700 text-white rounded-3xl text-xl hover:bg-emerald-800 transition">
            Subscribe for updates
          </button>
        </div>
      </div>

      <p className="mt-16 text-center text-emerald-600 font-light">With love and soil-stained hands,<br />Bea</p>
    </div>
  );
}