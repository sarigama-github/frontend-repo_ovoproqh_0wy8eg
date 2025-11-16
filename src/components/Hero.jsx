export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28" id="home">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block rounded-full bg-teal-50 text-teal-700 px-3 py-1 text-xs font-semibold mb-4">
              A light of hope for every home
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Empowering Communities through Water, Health, Skills, and Livelihoods
            </h1>
            <p className="mt-5 text-gray-600 text-lg">
              We work hand-in-hand with rural communities to provide clean drinking water, free medical care, micro-enterprise setups, and skills training so families can earn with dignity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#programs" className="inline-flex items-center px-5 py-3 rounded-md bg-teal-600 text-white font-semibold hover:bg-teal-700">
                Explore Programs
              </a>
              <a href="#cta" className="inline-flex items-center px-5 py-3 rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50">
                Donate Now
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1516301114473-48c708c53d55?q=80&w=1600&auto=format&fit=crop"
                alt="Community support"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 ring-1 ring-gray-200 w-56">
              <p className="text-sm font-semibold text-gray-900">7000+ Beneficiaries</p>
              <p className="text-xs text-gray-600">across water, health, and livelihood programs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
