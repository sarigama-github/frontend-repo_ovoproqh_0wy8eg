import { Droplets, Stethoscope, Store, GraduationCap } from 'lucide-react'

const details = [
  {
    icon: Droplets,
    title: 'Clean Drinking Water',
    paragraphs: [
      'Access to safe water is the foundation for health and opportunity. We identify water-stressed villages with local partners and install hand pumps or filtration units based on ground surveys.',
      'Community members are trained for upkeep and basic repairs to ensure long-term sustainability. Periodic water quality testing is carried out to maintain safety standards.',
    ],
    bullets: [
      'Site surveys and community consultations',
      'Pump installation with local technicians',
      'Maintenance training and tracking',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Free Medical Camps',
    paragraphs: [
      'Our medical camps bring doctors and essential medicines directly to underserved communities. We cover general OPD, maternal health, pediatric care, and eye screenings.',
      'Patients needing advanced care are referred to partner hospitals. Health awareness and prevention are at the heart of each camp.',
    ],
    bullets: ['Qualified volunteer doctors', 'Free medicines and lab tests', 'Referral network for follow-ups'],
  },
  {
    icon: Store,
    title: 'Small Business Setups',
    paragraphs: [
      'We provide seed capital, tools, and mentorship to help families launch income-generating micro-businesses such as tailoring, food carts, and repair services.',
      'Our volunteers guide basic bookkeeping and customer service to sustain enterprises beyond the launch phase.',
    ],
    bullets: ['Micro-grants with accountability', 'Mentorship and market linkages', 'Women-led home businesses'],
  },
  {
    icon: GraduationCap,
    title: 'Learn to Earn',
    paragraphs: [
      'Skills training helps youth and women secure jobs or start small ventures. We run batches in digital literacy, stitching, and vocational trades.',
      'Post-training support includes apprenticeships and job placement assistance through local partners.',
    ],
    bullets: ['Job-focused curriculum', 'Apprenticeships and placements', 'Certificates for graduates'],
  },
]

export default function ProgramDetails() {
  return (
    <section id="program-details" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900">How Our Programs Work</h2>
          <p className="mt-2 text-gray-600">From community surveys to follow-ups, heres our step-by-step approach for sustainable impact.</p>
        </div>

        <div className="mt-10 space-y-10">
          {details.map(({ icon: Icon, title, paragraphs, bullets }) => (
            <div key={title} className="p-6 rounded-xl border border-gray-200 bg-white">
              <div className="flex items-center gap-2 text-teal-700">
                <Icon size={18} />
                <span className="text-xs font-semibold uppercase tracking-wide">Program</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
              {paragraphs.map((p, i) => (
                <p key={i} className="mt-3 text-sm text-gray-700">{p}</p>
              ))}
              <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
                {bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
