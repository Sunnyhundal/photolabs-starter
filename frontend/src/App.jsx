import React from 'react';
import photos from 'mocks/photos.js'
import topics from 'mocks/topics.js'
import HomeRoute from 'routes/HomeRoute';
import './App.scss';

const App = () => {
  return (
    <div className="App">


    <HomeRoute photos = {photos} topics = {topics} />

    
  
    </div>
  );
};

export default App;
