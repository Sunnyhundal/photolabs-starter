import React, { useState } from "react";
import useApplicationData from "hooks/useApplicationData";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";

const App = () => {
  const { state, showFavPhotos, showSelected, photosByTopic} =
    useApplicationData();

  const { favPhotos, isModalVisible, photoData, topicData } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        showSelected={showSelected}
        favPhotos={favPhotos}
        showFavPhotos={showFavPhotos}
        photosByTopic={photosByTopic}
      />
      {isModalVisible && (
        <PhotoDetailsModal
          photos={photoData}
          showSelected={showSelected}
          isModalVisible={isModalVisible}
          favPhotos={favPhotos}
          showFavPhotos={showFavPhotos}
          photosByTopic={photosByTopic}
        />
      )}
    </div>
  );
};

export default App;
