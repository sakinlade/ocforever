
const SupportSection = () => {
  return (
    <section id="support-section" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-gray-900 mb-8">
            Gift the Couple
          </h2>
        </div>
        
        {/* Bank Details Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100">
            
            {/* Bank Name */}
            <div className="mb-8">
              <div className="bg-gray-200 rounded-lg p-6">
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-gray-800 tracking-wide">
                  Wema Bank
                </h3>
              </div>
            </div>
            
            {/* Account Number */}
            <div className="mb-8">
              <div className="bg-gray-200 rounded-lg p-6">
                <p className="text-2xl sm:text-3xl font-serif font-medium text-gray-800 tracking-widest">
                  0436457414
                </p>
              </div>
            </div>
            
            {/* Account Name */}
            <div className="mb-8">
              <div className="bg-gray-200 rounded-lg p-6">
                <p className="text-xl sm:text-2xl font-serif font-medium text-gray-800 tracking-wide uppercase">
                  OYETOLA OYENIYI & CYNTHIA JETAWO
                </p>
              </div>
            </div>
            
          </div>
          
          {/* Thank You Message */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Your love, prayers, and presence mean the world to us. If you’d like to bless us with a gift, we’ll receive it with heartfelt gratitude as we begin this new chapter together
            </p>
            
            {/* Decorative element */}
            <div className="mt-8 flex items-center justify-center space-x-3">
              <div className="w-12 h-px bg-rose-300"></div>
              <span className="text-2xl text-rose-400">💕</span>
              <div className="w-12 h-px bg-rose-300"></div>
            </div>
            
            {/* Couple Names */}
            <div className="mt-8">
              <p className="text-2xl font-serif font-light text-gray-800 tracking-wide">
                Cynthia & Oyeniyi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection