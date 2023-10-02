import React from "react";

import "../styles/PhotoListItem.scss";





const PhotoListItem = (props) => {
  const {id, location, imageSource, username, profile} = props.sampleData;
  
  return (
    <div className="photo-list-item__item" key = {id}>
      <div className="photo-list-item__image-container">
        <img
          className="photo-list-item__image"
          src={imageSource}
          alt="A photo"
        />
      </div>
      <div className="photo-list-item__user-details">
        <div className="photo-list-item__location">
          {location.city},{" "}
          {location.country}
        </div>
        <div className="photo-list-item__username">
          {username}
        </div>
        <div className="photo-list-item__profile">
          <img
            className="photo-list-item__profile-image"
            src={profile}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );

};

export default PhotoListItem;
