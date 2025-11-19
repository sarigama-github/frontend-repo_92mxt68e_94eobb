import { useState } from "react";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <header className="sticky top-0 z-10 backdrop-blur bg-slate-900/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" className="w-8 h-8" />
            <span className="text-white font-semibold">UMKM Lokal</span>
          </div>
          <div className="text-blue-200 text-sm">Dukung usaha sekitar kita</div>
        </div>
      </header>

      <main>
        <Hero onSearch={(t) => setQuery(t)} />
        <ProductGrid query={query} />
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-blue-200/70 text-sm">
          © {new Date().getFullYear()} UMKM Lokal — Belanja dari yang terdekat.
        </div>
      </footer>
    </div>
  );
}

export default App;
