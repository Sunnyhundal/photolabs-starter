import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";





const PhotoListItem = (props) => {
  const {id, location, urls, user} = props.data;
  const {showSelected} = props;

  return (
    <div className="photo-list-item__item" key = {id}>
      <PhotoFavButton />
      <div className="photo-list-item__image-container">
        <img
          className="photo-list-item__image"
          src={urls.full}
          alt="A photo"
          onClick={() => showSelected(id)}  
        />
      </div>
      <div className="photo-list-item__user-details">
        <div className="photo-list-item__location">
          {location.city},{" "}
          {location.country}
        </div>
        <div className="photo-list-item__username">
          {user.username}
        </div>
        <div className="photo-list-item__profile">
          <img
            className="photo-list-item__profile-image"
            src={user.profile}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );

};

export default PhotoListItem;
