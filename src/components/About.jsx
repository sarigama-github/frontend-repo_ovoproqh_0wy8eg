export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-900">About Chaanan Foundation</h2>
            <p className="mt-4 text-gray-600">
              Chaanan means “light” — and our mission is to brighten lives across Pakistan by addressing the basics every family deserves:
              safe water, accessible healthcare, and the dignity of work. We partner with communities, local leaders, and volunteers to design
              practical solutions that last.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="p-3 bg-white border border-gray-200 rounded-md">Community-first planning</li>
              <li className="p-3 bg-white border border-gray-200 rounded-md">Transparent reporting</li>
              <li className="p-3 bg-white border border-gray-200 rounded-md">Volunteer-led initiatives</li>
              <li className="p-3 bg-white border border-gray-200 rounded-md">Focus on women & youth</li>
            </ul>
          </div>
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
                alt="Volunteers collaborating with community members"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
