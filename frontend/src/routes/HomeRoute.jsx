import React, { useState } from "react";

import "../styles/HomeRoute.scss";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  const { topics, photos, showSelected, favPhotos, showFavPhotos } = props;
  
  const isFavPhotoExist = favPhotos.length > 0;
  {
    console.log(favPhotos);
  }

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} />
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
