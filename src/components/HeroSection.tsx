
import bg from '../assets/IMG_3944.jpeg';

const HeroSection = () => {
  const scrollToSupport = () => {
    const supportSection = document.querySelector('#support-section');
    if (supportSection) {
      supportSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full h-screen bg-cover bg-top relative" style={{ backgroundImage: `url(${bg})` }}>
        {/* Header */}
        <header className="relative z-20 flex justify-between items-center px-6 sm:px-8 lg:px-12 py-6">
          {/* Logo/Couple Name */}
          <div className="flex items-center">
            <h2 className="text-sm sm:text-lg font-sans font-semibold text-white tracking-wider">
              #OCFOREVER2025💕
            </h2>
          </div>
          
          {/* Donate Button */}
          <button 
            onClick={scrollToSupport}
            className="backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105 font-medium tracking-wide"
          >
            Send a Gift🎁
          </button>
        </header>

        {/* Background Overlay */}
        <div className="h-screen w-full absolute top-0 bg-black opacity-40"></div>
        
        {/* Main Content */}
        <div className="z-10 absolute sm:top-36 inset-0 flex flex-col gap-2.5 items-center justify-center md:justify-start">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-center px-4">CYNTHIA & OYENIYI</h1>
            <p className="text-xl text-white text-center px-4">A love story sealed forever 💍</p>
            <p className="text-xl text-white text-center px-4">October 4, 2025</p>
        </div>
    </section>
  )
}

export default HeroSection;