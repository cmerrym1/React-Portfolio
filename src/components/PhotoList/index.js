import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Run Buddy',
      category: 'portfolio',
      description:
        'Run Buddy is an app that connects people with personal trainers'
    },
    {
      name: 'Robot Gladiators',
      category: 'portfolio',
      description:
        'This is a neat little game where you make robots fight to the death - definetly raises some ethical questions....'
    },
    {
      name: 'Recipe Search',
      category: 'portfolio',
      description:
        'The Recipe Search app allows users to search by an ingredient or food item and the app returns recipes which include that item.'
    },
    {
      name: 'Curious Traveler',
      category: 'portfolio',
      description:
        'The Curious Traveler is THE web destination for those who enjoy the unusal and traveling. This blog site allows users to create an account and post their favorite Curious Destinations and find a few new ones while they are at it.'
    },
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
