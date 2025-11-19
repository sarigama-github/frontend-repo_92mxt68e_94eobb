export default function ProductCard({ product }) {
  return (
    <div className="group bg-slate-800/60 border border-white/10 rounded-xl overflow-hidden hover:border-blue-400/40 transition">
      <div className="aspect-square bg-slate-900/50 overflow-hidden">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1519336555923-59661f41bb53?q=80&w=800&auto=format&fit=crop";
            }}
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-blue-200/60 text-sm">
            Tidak ada gambar
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold line-clamp-1">{product.title}</h3>
        <p className="text-blue-200/80 text-sm line-clamp-2 mt-1">{product.category || "UMKM"}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-blue-300 font-semibold">Rp {new Intl.NumberFormat('id-ID').format(product.price)}</span>
          {product.store_name && (
            <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-200 rounded">
              {product.store_name}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
