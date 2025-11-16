export default function Impact() {
  const stats = [
    { label: 'Hand Pumps & Water Points', value: '120+' },
    { label: 'Patients Treated', value: '15,000+' },
    { label: 'Businesses Launched', value: '200+' },
    { label: 'Youth & Women Trained', value: '1,000+' },
  ]

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Our Impact</h2>
          <p className="mt-2 text-gray-600">Transparent, measurable outcomes made possible by our donors and volunteers.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg bg-white p-6 text-center border border-gray-200">
              <p className="text-3xl font-extrabold text-gray-900">{s.value}</p>
              <p className="mt-1 text-sm text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
