import React from 'react'

export default function BannerApp() {
  return (
   <main>
  {/* Hero Section */}
  <section className="relative min-h-[870px] flex items-center overflow-hidden bg-surface">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div className="space-y-8">
        <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label text-sm font-semibold tracking-wider uppercase">
          Traditional Flavors, Modern Craft
        </span>
        <h1 className="text-7xl md:text-8xl text-primary leading-tight font-light">
          The Modern <span className="italic font-normal">Heirloom</span> of
          Taste.
        </h1>
        <p className="text-xl text-on-surface-variant font-body max-w-lg leading-relaxed">
          Experience a curated culinary journey through Gujarat, Punjab, and the
          Orient, served with ancestral warmth and contemporary elegance.
        </p>
        <div className="flex items-center gap-6">
          <button className="px-10 py-5 bg-primary text-on-primary font-label font-bold rounded-lg shadow-xl shadow-primary/20 hover:shadow-2xl transition-all active:scale-95 text-lg">
            Order Now
          </button>
          <button className="group flex items-center gap-3 font-label font-semibold text-primary hover:text-secondary transition-colors">
            Explore Menu
            <span
              className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
              data-icon="arrow_right_alt"
            >
              arrow_right_alt
            </span>
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl" />
        <div className="relative z-10 aspect-[4/5] rounded-xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
          <img
            className="w-full h-full object-cover"
            data-alt="Exquisite traditional Indian thali served on a polished brass plate with various colorful curries, dal, and handmade flatbreads under warm lighting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGI233CDec_3lLVRE7Q4KB4C3JZmq8Y1_k17N0WnBsMfA9-uNsPB1RbAhAsst4EO6w_nCY1Tu8sp5I-TdB-hsbxxUNFa3Lq-Ndb0WyJs5-rhs9xrWopXgbA9yV5OoamsDwzJR6fbvTj4aAlHS1Ic-NSW9FQOX9ISmXYcBIgVxD74y04rWhYLqfZCP8QtN-qD_spdgi_JQLPOJV-h-Kq1Mf-z_8N3pM9ETFW5EgZl1-4aF8y7_ujgrBYnt1bM8PFVrwxWpTyVe1LqKa"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="font-headline text-3xl">Grand Maharaja Thali</p>
            <p className="font-body text-sm opacity-80 uppercase tracking-widest">
              Our Signature Experience
            </p>
          </div>
        </div>
        {/* Overlapping element for Editorial Style */}
        <div className="absolute -bottom-10 -left-10 bg-surface-container-lowest p-8 shadow-xl max-w-xs hidden lg:block transform -rotate-3 hover:rotate-0 transition-transform duration-500">
          <p className="text-primary font-headline text-2xl italic mb-2">
            Authentic Masala
          </p>
          <p className="text-on-surface-variant text-sm font-body leading-relaxed">
            Our spices are stone-ground daily following a 120-year-old family
            recipe, preserving every aromatic note.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>

  )
}
