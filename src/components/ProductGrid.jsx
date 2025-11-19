import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ query }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backend = import.meta.env.VITE_BACKEND_URL || "";

  useEffect(() => {
    const controller = new AbortController();
    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        const url = new URL("/api/products", backend || window.location.origin.replace(":3000", ":8000"));
        if (query) url.searchParams.set("q", query);
        const res = await fetch(url.toString(), { signal: controller.signal });
        if (!res.ok) throw new Error("Gagal memuat produk");
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
    return () => controller.abort();
  }, [query, backend]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12 text-blue-200">Memuat produk…</div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12 text-red-300">{error}</div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pb-16">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold">Produk Terbaru</h2>
        <span className="text-blue-200 text-sm">{products.length} produk</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      {products.length === 0 && (
        <div className="text-center text-blue-200/80 mt-12">Belum ada produk. Tambahkan data melalui database viewer.</div>
      )}
    </div>
  );
}
