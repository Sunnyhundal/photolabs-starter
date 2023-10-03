import React from 'react';

//import PhotoListItem from './components/PhotoListItem';

import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

// const photo = new Array(2).fill(sampleDataForPhotoListItem);

// Note: Rendering a single component to build components in isolation
const App = (props) => {
  return (
    <div className="App">


    <TopNavigationBar/>

    
  
    </div>
  );
};

export default App;
