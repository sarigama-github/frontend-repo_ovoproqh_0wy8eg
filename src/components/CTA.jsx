export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Your support changes lives</h2>
        <p className="mt-3 text-gray-600">
          Every contribution brings clean water to a village, medicine to a patient, and skills to someone ready to work. Partner with us today.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center px-6 py-3 rounded-md bg-teal-600 text-white font-semibold hover:bg-teal-700">
            Donate Online
          </a>
          <a href="#" className="inline-flex items-center px-6 py-3 rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50">
            Volunteer
          </a>
        </div>
      </div>
    </section>
  )
}
