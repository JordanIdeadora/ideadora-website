import { TrendingUp, User, Package, Star, ShoppingCart, BarChart3 } from "lucide-react"

export function HeroIllustration() {
  return (
    <div className="relative">
      {/* Main Dashboard */}
      <div className="relative rounded-2xl bg-[#1a365d] p-4 shadow-2xl">
        {/* Top bar */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
            </div>
            <div className="ml-4 flex gap-1">
              <div className="h-1 w-4 rounded bg-white/20"></div>
              <div className="h-1 w-8 rounded bg-white/20"></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center">
              <User className="h-3 w-3 text-white/60" />
            </div>
            <div className="h-1.5 w-16 rounded bg-white/20"></div>
          </div>
        </div>

        {/* Main content area */}
        <div className="grid gap-3">
          {/* Search and header */}
          <div className="flex items-center gap-3">
            <div className="h-8 flex-1 rounded-lg bg-white/10 px-3 flex items-center">
              <div className="h-1.5 w-24 rounded bg-white/30"></div>
            </div>
            <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
              <BarChart3 className="h-4 w-4 text-white/60" />
            </div>
          </div>

          {/* Product cards grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Product Card 1 */}
            <div className="rounded-xl bg-white p-3">
              <div className="mb-2 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e8f4fc]">
                  <User className="h-5 w-5 text-[#1a365d]" />
                </div>
                <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  <span className="text-[8px] font-medium text-green-700">Activo</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-20 rounded bg-gray-200"></div>
                <div className="h-1 w-14 rounded bg-gray-100"></div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-[10px] font-medium text-gray-600">4.8</span>
                </div>
                <div className="text-[10px] font-bold text-[#1a365d]">$549</div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="rounded-xl bg-white p-3">
              <div className="mb-2 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fef3e2]">
                  <Package className="h-5 w-5 text-[#b45309]" />
                </div>
                <div className="flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  <span className="text-[8px] font-medium text-blue-700">Nuevo</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-16 rounded bg-gray-200"></div>
                <div className="h-1 w-12 rounded bg-gray-100"></div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-[10px] font-medium text-gray-600">4.9</span>
                </div>
                <div className="text-[10px] font-bold text-[#1a365d]">$899</div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="rounded-xl bg-white p-3">
              <div className="mb-2 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f3e8ff]">
                  <ShoppingCart className="h-5 w-5 text-[#7c3aed]" />
                </div>
                <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
                  <span className="text-[8px] font-medium text-yellow-700">Top</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-18 rounded bg-gray-200"></div>
                <div className="h-1 w-10 rounded bg-gray-100"></div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-[10px] font-medium text-gray-600">5.0</span>
                </div>
                <div className="text-[10px] font-bold text-[#1a365d]">$1,299</div>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="rounded-xl bg-white p-3">
              <div className="mb-2 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e8f4fc]">
                  <User className="h-5 w-5 text-[#1a365d]" />
                </div>
                <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  <span className="text-[8px] font-medium text-green-700">Activo</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-14 rounded bg-gray-200"></div>
                <div className="h-1 w-8 rounded bg-gray-100"></div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-[10px] font-medium text-gray-600">4.7</span>
                </div>
                <div className="text-[10px] font-bold text-[#1a365d]">$749</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-xl bg-white px-4 py-3 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
            <TrendingUp className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Primeras ventas</p>
            <p className="text-xs text-gray-500">En 30 días</p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-[#6b9fd4]/20 blur-2xl"></div>
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#1a365d]/10 blur-3xl"></div>
    </div>
  )
}
