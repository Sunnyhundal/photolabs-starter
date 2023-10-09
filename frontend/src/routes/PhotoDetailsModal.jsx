import React from "react";
import PhotoListItem from "components/PhotoListItem";
import PhotoFavButton from "components/PhotoFavButton";

import "../styles/PhotoDetailsModal.scss";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoList.scss";

import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const { photos, showSelected, isModalVisible, favPhotos, showFavPhotos } =
    props;
  const modalPhoto = photos.filter((photo) => isModalVisible === photo.id);
  const photo = modalPhoto[0];
  const similarPhotosToModal = Object.values(photo.similar_photos);

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button">
          <img
            src={closeSymbol}
            alt="close symbol"
            onClick={() => showSelected(null)}
          />
        </button>
      </div>

      <div className="photo-details-modal__images">
        <PhotoFavButton
          id={isModalVisible}
          favPhotos={favPhotos}
          showFavPhotos={showFavPhotos}
        />
        <img
          src={photo.urls.full}
          alt="full size"
          className="photo-details-modal__image"
        />

        <div className="photo-list-item__user-details">
          <div className="photo-list__user-profile">
            <img
              src={photo.user.profile}
              alt="profile"
              className="photo-list-item__profile-image"
            />
          </div>

          <div className="photo-list-item__user-info">
            {photo.user.name}

            <div className="photo-list-item__user-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
        <h4>Related Photos</h4>
        <PhotoList
          className="photo-details-modal__images"
          photos={similarPhotosToModal}
          showSelected={showSelected}
          favPhotos={favPhotos}
          showFavPhotos={showFavPhotos}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
