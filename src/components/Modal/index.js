import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const {title, category, description, live, index} = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{title} </h3>
        <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
            <p>{description}</p>
            <p>{live}</p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
