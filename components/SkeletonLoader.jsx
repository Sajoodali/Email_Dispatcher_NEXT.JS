export default function SkeletonLoader() {
  return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden animate-pulse">
      {/* Header Skeleton */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg"></div>
          <div className="flex-1">
            <div className="h-8 bg-white/20 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-white/20 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      {/* Form Skeleton */}
      <div className="p-8 space-y-6">
        {/* Input Field 1 */}
        <div className="space-y-2">
          <div className="h-4 bg-slate-200 rounded w-32"></div>
          <div className="h-12 bg-slate-100 rounded-xl"></div>
        </div>

        {/* Input Field 2 */}
        <div className="space-y-2">
          <div className="h-4 bg-slate-200 rounded w-28"></div>
          <div className="h-12 bg-slate-100 rounded-xl"></div>
        </div>

        {/* Textarea */}
        <div className="space-y-2">
          <div className="h-4 bg-slate-200 rounded w-36"></div>
          <div className="h-32 bg-slate-100 rounded-xl"></div>
        </div>

        {/* Button */}
        <div className="h-14 bg-slate-200 rounded-xl"></div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100">
          <div className="h-4 bg-slate-100 rounded w-48 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
