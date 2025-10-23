import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Modern Office Space',
    },
    {
      url: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Team Consultation',
    },
    {
      url: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Legal Library',
    },
    {
      url: 'https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Conference Room',
    },
    {
      url: 'https://images.pexels.com/photos/7876658/pexels-photo-7876658.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Client Meeting',
    },
    {
      url: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Award Ceremony',
    },
    {
      url: 'https://images.pexels.com/photos/7876721/pexels-photo-7876721.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Team Building Event',
    },
    {
      url: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Legal Workshop',
    },
    {
      url: 'https://images.pexels.com/photos/8112182/pexels-photo-8112182.jpeg?auto=compress&cs=tinysrgb&w=800',
      caption: 'Reception Area',
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Take a look at our state-of-the-art facilities, team events, and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-lg">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => navigateImage('next')}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-5xl max-h-[90vh] flex flex-col items-center">
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-xl mt-4 font-medium">
              {images[selectedImage].caption}
            </p>
            <p className="text-white/60 text-sm mt-2">
              {selectedImage + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
