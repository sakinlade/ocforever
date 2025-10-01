
import img1 from '../assets/IMG_3944.jpeg'
import img2 from '../assets/IMG_3984.jpeg'
import img3 from '../assets/IMG_4005.jpeg'
import img4 from '../assets/IMG_4024.jpeg'
import img5 from '../assets/IMG_9312.jpg'
import img6 from '../assets/IMG_9313.jpg'

const GallerySection = () => {
  const images = [
    { src: img1, alt: "Beautiful moment 1", caption: "Our Special Day" },
    { src: img2, alt: "Beautiful moment 2", caption: "Together Forever" },
    { src: img5, alt: "Beautiful moment 5", caption: "Cherished Memories" },
    { src: img3, alt: "Beautiful moment 3", caption: "Love & Laughter" },
    { src: img4, alt: "Beautiful moment 4", caption: "Perfect Moments" },
    { src: img6, alt: "Beautiful moment 6", caption: "Timeless Love" }
  ]

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-gray-900 mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-px bg-rose-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            A collection of our favorite moments together
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-12">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                borderRadius: index % 2 === 0 ? '20px 0 20px 0' : '0 20px 0 20px'
              }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-white text-lg font-medium tracking-wide">
                    {image.caption}
                  </span>
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-rose-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom decorative element */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-rose-400">
            <div className="w-8 h-px bg-rose-300"></div>
            <span className="text-2xl">💕</span>
            <div className="w-8 h-px bg-rose-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection