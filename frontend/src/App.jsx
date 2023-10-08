import React, { useState } from "react";
import useApplicationData from "hooks/useApplicationData";
import photos from "mocks/photos.js";
import topics from "mocks/topics.js";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";

const App = () => {


  const { state, showFavPhotos, showSelected}= useApplicationData();

  const { favPhotos, isModalVisible } = state;


  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        showSelected={showSelected}
        favPhotos={favPhotos}
        showFavPhotos={showFavPhotos}
      />
      {isModalVisible && (
        <PhotoDetailsModal
          photos={photos}
          showSelected={showSelected}
          isModalVisible={isModalVisible}
          favPhotos={favPhotos}
          showFavPhotos={showFavPhotos}
        />
      )}
    </div>
  );
};

export default App;
