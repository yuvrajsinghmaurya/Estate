import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2); // Default: 2 for mobile
  const [modalImage, setModalImage] = useState(null);

  // Responsive card count
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth <= 768) {
        setCardsToShow(2); // Small screen
      } else {
        setCardsToShow(4); // Large screen
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const totalSlides = Math.ceil(projectsData.length / cardsToShow);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const openModal = (image) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <div className='container mx-auto px-4 pt-20 pb-10 w-full overflow-hidden' id='Projects'>
      {/* Heading */}
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span>
      </h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
        Crafting Space, Building Legacies — Our Portfolio
      </p>

      {/* Slider Buttons */}
      <div className='flex justify-end mb-4'>
        <button onClick={prevProject} className='p-2 bg-gray-200 rounded-full hover:bg-gray-300'>
          <img src={assets.left_arrow} alt='Previous' className='w-5 h-5' />
        </button>
        <button onClick={nextProject} className='p-2 ml-2 bg-gray-200 rounded-full hover:bg-gray-300'>
          <img src={assets.right_arrow} alt='Next' className='w-5 h-5' />
        </button>
      </div>

      {/* Slider */}
      <div className='relative overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-in-out gap-6'
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            width: `${(projectsData.length / cardsToShow) * 100}%`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className='w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 p-2'
            >
              <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform transition hover:scale-105'>
                <img
                  src={project.image}
                  alt={project.title}
                  onClick={() => openModal(project.image)}
                  className='w-full h-56 object-cover cursor-pointer'
                />
                <div className='p-4'>
                  <h2 className='text-lg font-bold text-gray-800 truncate'>{project.title}</h2>
                  <p className='text-sm text-gray-600'>
                    ₹{project.price}
                    <span className='ml-2 text-gray-500'>| {project.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Popup Modal */}
      {modalImage && (
        <div
          onClick={closeModal}
          className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4'
        >
          <img
            src={modalImage}
            alt='Enlarged'
            className='rounded-lg max-w-2xl w-full max-h-[80vh] object-contain transition-all duration-300 scale-110'
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
