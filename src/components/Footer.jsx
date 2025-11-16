export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <h4 className="text-white font-semibold">Chaanan Foundation</h4>
          <p className="mt-2 text-sm text-gray-400">A non-profit dedicated to uplifting rural communities in Pakistan through water, health, and livelihood programs.</p>
        </div>
        <div>
          <h5 className="text-white font-semibold">Programs</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#programs" className="hover:text-white">Clean Drinking Water</a></li>
            <li><a href="#programs" className="hover:text-white">Free Medical Camps</a></li>
            <li><a href="#programs" className="hover:text-white">Small Business Setups</a></li>
            <li><a href="#programs" className="hover:text-white">Learn to Earn</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold">Get Involved</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#cta" className="hover:text-white">Donate</a></li>
            <li><a href="#cta" className="hover:text-white">Volunteer</a></li>
            <li><a href="#" className="hover:text-white">Partner with us</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold">Contact</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="mailto:info@chaanan.org" className="hover:text-white">info@chaanan.org</a></li>
            <li><a href="https://www.chaanan.org" target="_blank" className="hover:text-white" rel="noreferrer">www.chaanan.org</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Chaanan Foundation. All rights reserved.
      </div>
    </footer>
  )
}
