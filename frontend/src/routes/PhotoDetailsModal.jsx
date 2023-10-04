import React from 'react';
import PhotoListItem from 'components/PhotoListItem';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
const {photos, showSelected, isModalVisible} = props;
const modalPhoto = photos.filter(photo => (isModalVisible === photo.id));
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick = {() => showSelected(null)} />

        {console.log(modalPhoto[0])}

      </button>
    </div>
  )
};

export default PhotoDetailsModal;
