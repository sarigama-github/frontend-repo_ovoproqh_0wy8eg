import { Droplets, Stethoscope, Store, GraduationCap, Syringe, ShieldQuestion } from 'lucide-react'

const causes = [
  {
    icon: Droplets,
    title: 'Clean Drinking Water',
    items: [
      'Hand pumps installation in water-scarce villages',
      'Filtration units for schools and community centers',
      'Water quality testing and hygiene awareness',
    ],
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop',
  },
  {
    icon: Stethoscope,
    title: 'Free Medical Camps',
    items: [
      'General OPD, pediatrics, gynecology, and eye checkups',
      'Free medicines and basic lab tests',
      'Health awareness sessions and referrals',
    ],
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600&auto=format&fit=crop',
  },
  {
    icon: Store,
    title: 'Small Business Setups',
    items: [
      'Micro-grants for carts, sewing machines, and tools',
      'Mentorship and business planning support',
      'Market linkages to sustain income',
    ],
    image: 'https://images.unsplash.com/photo-1540205878916-5f967db23f61?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjMzMjYyNzh8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    icon: GraduationCap,
    title: 'Learn to Earn',
    items: [
      'Digital literacy, stitching, and vocational training',
      'Placement support and apprenticeships',
      'Women-centric batches with childcare support',
    ],
    image: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Causes() {
  return (
    <section id="causes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Our Causes</h2>
          <p className="mt-2 text-gray-600">A deeper look at how each program operates and the change it creates.</p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {causes.map(({ icon: Icon, title, items, image }) => (
            <div key={title} className="rounded-xl overflow-hidden border border-gray-200 bg-white">
              <div className="h-56 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-teal-700">
                  <Icon size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wide">Cause</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
                <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
                  {items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
