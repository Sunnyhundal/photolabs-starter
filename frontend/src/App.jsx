import React, { useState } from 'react';
import photos from 'mocks/photos.js'
import topics from 'mocks/topics.js'
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

const App = () => {
  
  const [isModalVisible, setIsModalVisible] = useState(null);
  const showSelected = (id) => isModalVisible ? setIsModalVisible(null) : setIsModalVisible(id);
  
  
  return (
    <div className="App">


    <HomeRoute photos = {photos} topics = {topics} showSelected = {showSelected} />
    {isModalVisible && <PhotoDetailsModal />}

    
  
    </div>
  );
};

export default App;
