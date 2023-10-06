import React, { useState } from "react";
import photos from "mocks/photos.js";
import topics from "mocks/topics.js";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";

const App = () => {
  const [favPhotos, setFavPhotos] = useState([]);

  const showFavPhotos = (id) =>
    favPhotos.includes(id)
      ? setFavPhotos(favPhotos.filter((photo) => photo !== id))
      : setFavPhotos([...favPhotos, id]);

  const [isModalVisible, setIsModalVisible] = useState(null);
  const showSelected = (id) =>
    isModalVisible === id ? setIsModalVisible(null) : setIsModalVisible(id);

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
