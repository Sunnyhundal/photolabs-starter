import React from 'react';
import PhotoListItem from 'components/PhotoListItem';
import PhotoFavButton from "components/PhotoFavButton";

import '../styles/PhotoDetailsModal.scss'
import '../styles/PhotoListItem.scss'
import '../styles/PhotoList.scss'

import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
const {photos, showSelected, isModalVisible,} = props;
const modalPhoto = photos.filter(photo => (isModalVisible === photo.id));
  return (
    <div className="photo-details-modal">
     
     <div className="photo-details-modal__top-bar">
      
      
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick = {() => showSelected(null)} />

        {console.log(modalPhoto[0])}
      </button>
      </div>

      <div className='photo-details-modal__images'> 
      <PhotoFavButton />
        <img src={modalPhoto[0].urls.full} alt="full size" className="photo-details-modal__image" />
      
    
    <div className="photo-list-item__user-details">  
      
    <div className="photo-list__user-profile">
          <img src={modalPhoto[0].user.profile} alt="profile" className="photo-list-item__profile-image" />
        </div>
        
        <div className=".photo-list-item__user-info">
          {modalPhoto[0].user.username}
        
        
        <div className=".photo-list-item__user-location">
          {modalPhoto[0].location.city}, {modalPhoto[0].location.country}
        </div>
        </div>
        
    </div>
    <h4>Related Photos</h4>
    <PhotoList className="photo-details-modal__images"  photos = {photos} showSelected = {showSelected} />
    </div>
    
    

    
    </div>
  )
};

export default PhotoDetailsModal;
