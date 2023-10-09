import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoList from "./PhotoList";

const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.data;
  const { showSelected } = props;
  const { favPhotos, showFavPhotos } = props;
  return (
    <div className="photo-list-item__item" key={id}>
      <PhotoFavButton
        id={id}
        favPhotos={favPhotos}
        showFavPhotos={showFavPhotos}
      />
      <div className="photo-list-item__image-container">
        <img
          className="photo-list-item__image"
          src={urls.full}
          alt="A photo"
          onClick={() => showSelected(id)}
        />
      </div>
      <div className="photo-list-item__user-details">
        <div className="photo-list-item__profile">
          <img
            className="photo-list-item__profile-image"
            src={user.profile}
            alt="Profile"
          />
        </div>

        <div className="photo-list-item__user-info">
          {user.name}

          <div className="photo-list-item__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
