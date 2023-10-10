import React, { useState } from "react";
import useApplicationData, { ACTIONS } from "hooks/useApplicationData";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";

const App = () => {
  // This custom hook contains all of the logic to manage state and make API calls
  const { state, showFavPhotos, showSelected, photosByTopic, toggleNightMode, dispatch } =
    useApplicationData();

  // We use object destructuring to pull out the state properties we need
  const { favPhotos, isModalVisible, photoData, topicData, isNightMode } =
    state;

  {
    console.log(`Reaching app: ${state.isNightMode}`);
  }
  
  const handleNightModeToggle = () => {
    // Call the dispatch function to toggle night mode
    dispatch({ type: ACTIONS.TOGGLE_NIGHT_MODE });
  };


  return (
    <div className={`App ${state.isNightMode ? "night-mode" : ""}`}>
      {/* Here we pass the state and the functions to the HomeRoute component */}
      <HomeRoute
        photos={photoData}
        topics={topicData}
        showSelected={showSelected}
        favPhotos={favPhotos}
        showFavPhotos={showFavPhotos}
        photosByTopic={photosByTopic}
        toggleNightMode={toggleNightMode}
        isNightMode={isNightMode}
        handleNightModeToggle={handleNightModeToggle}
      />

      {/* Here we pass the state and the functions to the PhotoDetailsModal component */}
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
