import React from 'react'
import HeaderApp from '../HeaderApp'
import FooterApp from '../FooterApp'
export default function FeedbackApp() {
  return (
    <>

    <HeaderApp />
   <main className="flex-grow">
  {/* Hero Section */}
  <section className="relative h-[409px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
    <img
      alt="Restaurant Atmosphere"
      className="absolute inset-0 w-full h-full object-cover"
      data-alt="cinematic close-up of a beautifully set fine dining table with elegant brass cutlery and warm ambient candlelight"
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHykweir1_X7xI2Wn8BTwuuNxl8kdjj54zYj58SjnFadiaB_ShO95Ofo755otMSzkEcU7HaqvLyUFK-y2XIkFVLXz6yL2Inv4z0xBgE0FyvicW7VG_B5r4AOctTJYlPDbV9oivCp1ypWWDRFAhokFwMS6FhVUZy5MBvHJVCSxR2JJprFoHXKedZHNIaAfaomv5umzwkW2ZwxSoEhYAXdoScW1GY0ACxXiUwOXumxgCJOoci_vY_qvsjnlEvdN85w3u1i_GxqTk_cPa"
    />
    <div className="relative z-20 text-center px-6">
      <h1 className="text-5xl md:text-7xl text-on-primary font-bold mb-4 drop-shadow-lg">
        Your Experience Matters
      </h1>
      <p className="text-on-primary/90 text-lg md:text-xl font-label tracking-widest uppercase">
        Help us perfect the modern heirloom
      </p>
    </div>
  </section>
  {/* Feedback Content */}
  <section className="max-w-7xl mx-auto px-6 py-24">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      {/* Feedback Form Side */}
      <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 md:p-12 shadow-sm">
        <div className="mb-10">
          <h2 className="text-4xl text-primary mb-2">Share Your Thoughts</h2>
          <div className="h-1 w-20 bg-secondary-container" />
        </div>
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-label font-semibold text-on-surface-variant uppercase tracking-wider">
                Full Name
              </label>
              <input
                className="w-full bg-surface-container-lowest border-outline-variant/20 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                placeholder="Enter your name"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-label font-semibold text-on-surface-variant uppercase tracking-wider">
                Email Address
              </label>
              <input
                className="w-full bg-surface-container-lowest border-outline-variant/20 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
                type="email"
              />
            </div>
          </div>
          <div className="space-y-4">
            <label className="block text-sm font-label font-semibold text-on-surface-variant uppercase tracking-wider">
              Rate Your Experience
            </label>
            <div className="flex gap-4">
              <button
                className="group flex flex-col items-center gap-2"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-4xl text-secondary-container transition-transform group-hover:scale-110"
                  data-icon="star"
                  data-weight="fill"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span className="text-[10px] font-label uppercase">1</span>
              </button>
              <button
                className="group flex flex-col items-center gap-2"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-4xl text-secondary-container transition-transform group-hover:scale-110"
                  data-icon="star"
                  data-weight="fill"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span className="text-[10px] font-label uppercase">2</span>
              </button>
              <button
                className="group flex flex-col items-center gap-2"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-4xl text-secondary-container transition-transform group-hover:scale-110"
                  data-icon="star"
                  data-weight="fill"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span className="text-[10px] font-label uppercase">3</span>
              </button>
              <button
                className="group flex flex-col items-center gap-2"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-4xl text-secondary-container transition-transform group-hover:scale-110"
                  data-icon="star"
                  data-weight="fill"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span className="text-[10px] font-label uppercase">4</span>
              </button>
              <button
                className="group flex flex-col items-center gap-2"
                type="button"
              >
                <span
                  className="material-symbols-outlined text-4xl text-outline-variant/40 transition-transform group-hover:scale-110"
                  data-icon="star"
                >
                  star
                </span>
                <span className="text-[10px] font-label uppercase">5</span>
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-label font-semibold text-on-surface-variant uppercase tracking-wider">
              Detailed Feedback
            </label>
            <textarea
              className="w-full bg-surface-container-lowest border-outline-variant/20 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
              placeholder="Tell us about the flavors, the service, or your evening..."
              rows={5}
              defaultValue={""}
            />
          </div>
          <button className="w-full md:w-auto px-12 py-4 bg-primary text-on-primary rounded-lg font-label font-bold uppercase tracking-widest hover:bg-primary/90 active:scale-95 transition-all">
            Submit Feedback
          </button>
        </form>
      </div>
      {/* Testimonials/Stats Side */}
      <div className="lg:col-span-5 space-y-12">
        <div className="relative group overflow-hidden rounded-xl">
          <img
            alt="Culinary Detail"
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            data-alt="aesthetic food photography of traditional Indian appetizer served on a modern dark ceramic plate with micro-greens"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgq0nIqg2JwiOhDUUMe87etIpe6_ESjcZaTzsoBxSHeec2u8FbSTVCr0LYK5bV-KeIFikt50G5Ht-x7bwxQddBmsh1JDwoHhyeGrYwFKIo5oQACder8NvnzsiAZrnVpS7utFIsQcK5zP2jy7-ixEFcbEZk371uZ5A6IUYBeqIpoHMLcfaZgzQbIa5xCqaNQpNGaOJFKS6cVJPwIyqEPZtp4iZ0i3nXY1Zk0_7qweTFopYSmOEBS3KFTtRwGaofjRigOJ5_seQ7Y0z_"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
            <p className="text-on-primary italic font-headline text-2xl leading-relaxed">
              "A masterclass in balancing ancestral recipes with contemporary
              elegance."
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <h3 className="text-3xl text-primary">Voices of our Guests</h3>
          <div className="space-y-6">
            {/* Testimonial 1 */}
            <div className="p-6 bg-surface-container rounded-lg border-l-4 border-secondary transition-all hover:bg-surface-container-high">
              <div className="flex gap-1 mb-3">
                <span
                  className="material-symbols-outlined text-sm text-secondary"
                  data-icon="star"
                  data-weight="fill"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-sm text-secondary"
                  data-icon="star"
                  data-weight="fill"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-sm text-secondary"
                  data-icon="star"
                  data-weight="fill"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-sm text-secondary"
                  data-icon="star"
                  data-weight="fill"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-sm text-secondary"
                  data-icon="star"
                  data-weight="fill"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
              </div>
              <p className="text-on-surface-variant italic mb-4">
                "The smoked dal makhani was unlike anything I've tasted in
                years. The atmosphere is quiet, sophisticated, and deeply
                welcoming."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">
                  AK
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-tight">
                    Anjali Kapoor
                  </p>
                  <p className="text-[10px] text-on-surface-variant font-label">
                    DINED OCT 2023
                  </p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="p-6 bg-surface-container rounded-lg border-l-4 border-secondary transition-all hover:bg-surface-container-high">
              <div className="flex gap-1 mb-3">
                <span
                  className="material-symbols-outlined text-sm text-secondary"
                  data-icon="star"
                  data-weight="fill"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-sm text-secondary"
                  data-icon="star"
                  data-weight="fill"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-sm text-secondary"
                  data-icon="star"
                  data-weight="fill"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-sm text-secondary"
                  data-icon="star"
                  data-weight="fill"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined text-sm text-outline-variant/40"
                  data-icon="star"
                >
                  star
                </span>
              </div>
              <p className="text-on-surface-variant italic mb-4">
                "Impeccable service. They really take the heirloom concept
                seriously. Every dish tells a story."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">
                  MS
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-tight">
                    Michael Sterling
                  </p>
                  <p className="text-[10px] text-on-surface-variant font-label">
                    DINED SEP 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Newsletter / Closing Bento Section */}
  <section className="bg-surface-container-low py-20 mt-12">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 bg-surface rounded-xl p-10 flex flex-col justify-center border border-outline-variant/10">
        <h3 className="text-4xl text-primary mb-4">A Legacy of Taste</h3>
        <p className="text-on-surface-variant max-w-xl text-lg">
          We review every piece of feedback during our weekly culinary council
          meetings. Your voice directly shapes our next seasonal menu.
        </p>
      </div>
      <div className="bg-secondary-container rounded-xl p-10 flex flex-col items-center justify-center text-center">
        <span
          className="material-symbols-outlined text-5xl text-on-secondary-container mb-4"
          data-icon="restaurant"
          data-weight="fill"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          restaurant
        </span>
        <h4 className="text-xl font-bold text-on-secondary-container uppercase tracking-widest mb-2">
          4.8 / 5.0
        </h4>
        <p className="text-on-secondary-container/80 text-sm font-label">
          AVERAGE GUEST RATING
        </p>
      </div>
    </div>
  </section>
</main>
<FooterApp />
</>

  )
}
