import { Search } from "lucide-react";
import { useState } from "react";

export default function Hero({ onSearch }) {
  const [term, setTerm] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(147,197,253,0.15),transparent_35%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Belanja Produk UMKM Lokal
          </h1>
          <p className="mt-4 text-blue-200/90 max-w-2xl mx-auto">
            Temukan produk terbaik dari berbagai toko UMKM yang sudah terdaftar.
            Dukung ekonomi lokal dengan belanja langsung dari pelaku usaha.
          </p>
        </div>

        <form onSubmit={submit} className="mt-8 max-w-2xl mx-auto">
          <div className="flex items-stretch gap-2 bg-white/10 border border-white/15 backdrop-blur rounded-xl p-2">
            <div className="px-3 flex items-center text-blue-200">
              <Search size={20} />
            </div>
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white placeholder:text-blue-200/60 py-3"
              placeholder="Cari produk atau kategori (mis. kopi, kerajinan)"
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
              Cari
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
