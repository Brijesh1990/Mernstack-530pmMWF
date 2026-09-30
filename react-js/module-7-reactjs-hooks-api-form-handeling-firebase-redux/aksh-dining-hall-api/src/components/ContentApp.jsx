import React from 'react'

export default function ContentApp() {
  return (
   
    <>
  <section className="py-24 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <div className="space-y-4">
          <h2 className="text-5xl text-primary font-light">
            Featured <span className="italic">Cuisines</span>
          </h2>
          <div className="h-1 w-24 bg-secondary-container" />
        </div>
        <p className="text-on-surface-variant font-body max-w-xs text-right hidden md:block">
          Each platter is a curated map of regional spices and centuries-old
          culinary heritage.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto">
        {/* Gujarati */}
        <div className="md:col-span-7 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500">
          <div className="h-[400px] w-full overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-alt="Close up of a vibrant Gujarati thali with kadhi, dhokla, and various sweet and savory bowls on a rustic background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfjiH9IbWMH0b4Ug1RsTBOTu-EbeOXHmxYTlwfzUVw4xlMTjUc3yBMT82YdMUML65FYXoPObjMLL9soZ4h-eKRyFKd_Dnvn3Xdcuh9TTFWhTbWpVEo98yq8Gol2UPSG37HnVkbelOo34-ZjJhpptCFXsZ2NdxWh257azaBPDODe3x7JgipnOYpONla43azGL2BFndi8jrwAo_6CGYsU4UyPhHIhZzVKKFjQcLbBJ-uhP5Bj-qLQEbTDgva78XITcUtrsbTiBZbeghz"
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-4xl text-primary">Royal Gujarati</h3>
              <span className="text-secondary font-headline text-2xl">
                ₹450
              </span>
            </div>
            <p className="text-on-surface-variant font-body mb-6 leading-relaxed">
              A sweet and savory symphony of Dhokla, Kadhi, and seasonally
              inspired vegetable preparations.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-xs font-bold uppercase tracking-tighter">
                Chef's Choice
              </span>
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full text-xs font-bold uppercase tracking-tighter">
                Vegetarian
              </span>
            </div>
          </div>
        </div>
        {/* Punjabi */}
        <div className="md:col-span-5 flex flex-col gap-8">
          <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500 flex-1">
            <div className="h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-alt="Rich Punjabi Dal Makhani and Garlic Naan with a dollop of white butter in an artistic moody setting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKgwvxnkVY2Tsc_diXi1Mp3wg-qFGLCkZuVY68clsQ8yCmOf9fb6xCU_5KqLTeRO2e295004LmBoJvp9vZHvbzXY3fbAdb4szqKR0M3-LLyrseJnLL6WzuK0hX9GcXpf5invnrs1q3PHbKkjURBmYkJKJGVDmowYr1UPw8iQYICbnK9EkVA0ZTRkOOMYpaOMBMrVEBySmqFY9k-7C_SuhOxWlqmfpTX2YZe40lX4XVr1oZOFTMmz93qP-siYWW8_bp_qgjpds5tXnd"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl text-primary font-headline">
                Robust Punjab
              </h3>
              <p className="text-on-surface-variant text-sm font-body mt-2">
                Smoky Dal Makhani and butter-glazed Naan.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500 flex-1">
            <div className="h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-alt="Stir-fried noodles with crisp vegetables and vibrant sauces in a modern black ceramic bowl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeNPuHRjpzr1eVBBUhSeYk8RetEr-QGXaZPVj7GXjNhP62eNq0MRkA-fBmKWtpaZ5tCUuM0LRZWQkXwW7fFGIi7fRSjRo3EYvm9FIQnO5qN6naM8JJZoPp3yfOAr54sPucBwpklm6NyOkcyK3YBaak5Td6qgpBocFp5JMt_BuHYDWHvIeZNlmxdFgIrqlFII98NQT0wvbfolLb69QtoQsN_PwXDpjOzpODMONreV6wKd84lx0Mm0LLRhK0c6VB02r0oJMeECzyhvYh"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl text-primary font-headline">
                Oriental Fusion
              </h3>
              <p className="text-on-surface-variant text-sm font-body mt-2">
                Modern Chinese classics with a deshi twist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Offers & Combos */}
  <section className="py-24 bg-surface relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                data-alt="Assorted small plates of appetizers and salads arranged artistically"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1CmdD4p--FGV7GYYKPzpd5Sl413nk15JuYx4Xxik_YYBNSuczN-kia72aJBeB7oBqYBS9J_Uu72ECDMm-CCo--kqxlJ0IO7d1yHpHehyl9lHHElLv6pYYgLFqgjtd3FlNmQb9ZyBBdrYt7ka7on1SL42VEeRe2mNYVPeg3BrWrfMf6tOBIavJnaH6ebu-GYzbtDSPlGtSOWD_VyAkpNf5F8X68Xa81haiMh7yBBVTokDiegSap9q_5I7UVhJnw48Ew9ysk7VolYKA"
              />
            </div>
            <div className="bg-primary p-6 rounded-xl text-on-primary">
              <span className="font-headline text-5xl">20%</span>
              <p className="font-body text-sm mt-2 uppercase tracking-widest">
                Weekend Family Brunch
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-secondary-container p-6 rounded-xl text-on-secondary-container">
              <span className="font-headline text-5xl">B1G1</span>
              <p className="font-body text-sm mt-2 uppercase tracking-widest">
                Beverage Happy Hours
              </p>
            </div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-full object-cover"
                data-alt="Fresh fruit lassi served in traditional earthen pots on a marble surface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwVXFHzndGygrxUiOoHxsKJx302exAhf-hGGbVSdO-7T_oh6s7q5G19w92cYO3dF-AXCbQPZuQBA2532T7UPfeiNxd0JNgW6aamjQmgfHQDzKWm-CY9llDT09fi2DsHZEtYrS_7qsSC8vsSxCcWiFoi92Kix_F3uyjp27ZnHakVzqaMKn9OSiyPG3URnpclrKf-cHAQo0OY5p87BlL2MuFuvce4ynuzzjSUtz6JlwmPq9tV7MP8q83odmqV4IjzmLZKbVx_e6dyYeo"
              />
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-8">
          <h2 className="text-6xl text-primary font-light">
            The Golden <span className="italic">Hour</span> Specials
          </h2>
          <p className="text-xl text-on-surface-variant font-body leading-relaxed">
            Discover our limited-time curated combos designed for the ultimate
            communal dining experience. Perfect for families, colleagues, and
            celebrations.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-full bg-surface-container">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="restaurant"
                >
                  restaurant
                </span>
              </div>
              <div>
                <h4 className="text-xl font-headline text-on-surface">
                  The Corporate Platter
                </h4>
                <p className="text-on-surface-variant font-body text-sm">
                  Balanced lunch combos for high-performing teams.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-full bg-surface-container">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="celebration"
                >
                  celebration
                </span>
              </div>
              <div>
                <h4 className="text-xl font-headline text-on-surface">
                  Anniversary Curations
                </h4>
                <p className="text-on-surface-variant font-body text-sm">
                  A 7-course blind tasting menu for your special moments.
                </p>
              </div>
            </div>
          </div>
          <button className="px-8 py-4 bg-secondary text-on-primary rounded-lg font-bold hover:bg-secondary/90 transition-all">
            View All Offers
          </button>
        </div>
      </div>
    </div>
    <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -z-0 skew-x-12 translate-x-1/2" />
  </section>
</>


  )
}
