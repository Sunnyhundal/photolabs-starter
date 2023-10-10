import React, { useState } from "react";

import "../styles/HomeRoute.scss";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    showSelected,
    favPhotos,
    showFavPhotos,
    photosByTopic,
    isNightMode,
    handleNightModeToggle
  } = props;

  const isFavPhotoExist = favPhotos.length > 0;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        photosByTopic={photosByTopic}
        isNightMode={isNightMode}
        handleNightModeToggle={handleNightModeToggle}
      />
      <PhotoList
        photos={photos}
        favPhotos={favPhotos}
        showFavPhotos={showFavPhotos}
        showSelected={showSelected}
      />
    </div>
  );
};

export default HomeRoute;
