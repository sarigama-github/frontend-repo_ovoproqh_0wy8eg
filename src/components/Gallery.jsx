export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520974682230-9e0ce8271e56?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519455953755-af066f52f1ea?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1600&auto=format&fit=crop',
  ]

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Gallery</h2>
          <p className="mt-2 text-gray-600">Snapshots from our fieldwork, events, and training sessions.</p>
        </div>
        <div className="mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {images.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg">
              <img src={src} alt={`Gallery ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
