import { Droplets, Stethoscope, Store, GraduationCap } from 'lucide-react'

const programs = [
  {
    icon: Droplets,
    title: 'Clean Drinking Water',
    desc:
      'Installing hand pumps and filtration to provide safe, reliable water access to rural families.',
    image:
      'https://images.unsplash.com/photo-1503708928676-1cb796a0891f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    icon: Stethoscope,
    title: 'Free Medical Camps',
    desc:
      'Regular screenings, checkups, and medicines delivered through mobile clinics and community camps.',
    image:
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1600&auto=format&fit=crop',
  },
  {
    icon: Store,
    title: 'Small Business Setups',
    desc:
      'Micro-grants and mentorship to launch home-based businesses and strengthen household income.',
    image:
      'https://images.unsplash.com/photo-1605100804763-4a2a5b37a12b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    icon: GraduationCap,
    title: 'Learn to Earn',
    desc:
      'Skills training for youth and women in digital literacy, stitching, and trades that create jobs.',
    image:
      'https://images.unsplash.com/photo-1588195538325-983f3f58f381?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Our Core Programs</h2>
          <p className="mt-2 text-gray-600">
            Focused, community-led initiatives designed for lasting impact across water, health, and livelihoods.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map(({ icon: Icon, title, desc, image }) => (
            <div key={title} className="group rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <div className="h-40 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-teal-700">
                  <Icon size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wide">Program</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
