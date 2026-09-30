import React from 'react'

export default function CustomerReviews() {
  return (
  <section className="py-24 bg-surface-container-low">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16 space-y-4">
      <h2 className="text-5xl text-primary font-light">
        Voices of <span className="italic">Our Guests</span>
      </h2>
      <p className="text-on-surface-variant font-body">
        The true heart of Aksh lies in the stories shared at our tables.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Review 1 */}
      <div className="p-10 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
        <div className="flex gap-1 text-secondary mb-6">
          <span
            className="material-symbols-outlined"
            data-icon="star"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined"
            data-icon="star"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined"
            data-icon="star"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined"
            data-icon="star"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined"
            data-icon="star"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
        </div>
        <p className="text-lg text-on-surface font-body italic leading-relaxed mb-8">
          "The Gujarati thali here is a time machine. It took me straight back
          to my grandmother's kitchen in Ahmedabad. Pure soul food."
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
            <img
              className="w-full h-full object-cover"
              data-alt="Portrait of a smiling middle-aged man with warm lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnTF10s2frwKvcKwAmtJsHM1EK-JHoHqq_bxlAnPZ8PD8k0wGmvJ9Rmct7YRd5N0I9P2mfxtakhA7it62zVj_do0Re4eRsPJubzpBzIBB_L07vmAKUCFx_LOOyCjsdrFZGWNjf60Kf_zSC6USNf5kpXjvCugpwbzUGRkmSRmy1hAUDoAQPy0MnSDhsVAc-bU5PS5JHekbFJmVuCjtxQc_0dh9nuB20z5pVqEx8C_aREbKszz5en-S91EW3q2JEuZ96WBxk6WJyeUpe"
            />
          </div>
          <div>
            <p className="font-headline text-lg font-bold text-primary">
              Anand Shah
            </p>
            <p className="text-xs font-body text-on-surface-variant uppercase tracking-widest">
              Food Critic
            </p>
          </div>
        </div>
      </div>
      {/* Review 2 */}
      <div className="p-10 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
        <div className="flex gap-1 text-secondary mb-6">
          <span
            className="material-symbols-outlined"
            data-icon="star"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined"
            data-icon="star"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined"
            data-icon="star"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined"
            data-icon="star"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined"
            data-icon="star"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
        </div>
        <p className="text-lg text-on-surface font-body italic leading-relaxed mb-8">
          "Exquisite presentation meets authentic taste. The Punjabi Dal Makhani
          is arguably the best in the city. A true heirloom experience."
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
            <img
              className="w-full h-full object-cover"
              data-alt="Portrait of a young professional woman with a soft background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArhPeQUelK7fh8TcHvlOc39bSSgqWiB7H7AP_8CMMxdDm460VPt3Hzh1Va3VFAo_Sfccwk4Zz_yFluZlQLSMGem4BDsprCK6WBk1Njd193BZhxqelrfxE9v21QzOts3-xlToJ8zLOqldUO2Z8Z1k3Ml9wKpr6x8jVpuvNzfzxKehW9TNykSi1CINc23_Xh2hQEN_QruKLJH17FD_VUnE0Xu_xJOqylkKz2zgrJeZrS5sg9-y7JA9TXedXTt0kgKryZBQ4beG0lM6G5"
            />
          </div>
          <div>
            <p className="font-headline text-lg font-bold text-primary">
              Priya Kapoor
            </p>
            <p className="text-xs font-body text-on-surface-variant uppercase tracking-widest">
              Tech Lead
            </p>
          </div>
        </div>
      </div>
      {/* Review 3 */}
      <div className="p-10 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
        <div className="flex gap-1 text-secondary mb-6">
          <span
            className="material-symbols-outlined"
            data-icon="star"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined"
            data-icon="star"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined"
            data-icon="star"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined"
            data-icon="star"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined"
            data-icon="star"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            star
          </span>
        </div>
        <p className="text-lg text-on-surface font-body italic leading-relaxed mb-8">
          "I love how they've modernized the dining experience without losing
          the essence of Indian hospitality. The staff is exceptional."
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
            <img
              className="w-full h-full object-cover"
              data-alt="Portrait of a cheerful young man in a smart casual outfit"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfocXVNla-Ryq7gdfnz1SSQe-kG6aKgCMYztB77QcmCnyvs1VWLz1iGJVkUB3113TtxnvYqEblMX9OjSbXtBkm3Hm8lNfj9CLQIPDSigXoa6OTB-Ii0J_H6rQhWxELtblwy2unYUCRlxjWypB-LSVJq7haahADHSt7pDgmNVyRXAL4j3-0_0eOGS-XUOVZNxI-z6e-7X32LBDiKTWG-yyV6m9khvd9S88JbHf9mf6DPmL2Wm2tO5vApuUL_9QKU9h8EODiGgIGF1e8"
            />
          </div>
          <div>
            <p className="font-headline text-lg font-bold text-primary">
              Rahul Mehta
            </p>
            <p className="text-xs font-body text-on-surface-variant uppercase tracking-widest">
              Interior Designer
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
