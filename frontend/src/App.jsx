import React from 'react';

//import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';
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
     {/* <PhotoListItem/> */}
     
      {/* <PhotoListItem sampleData = {sampleDataForPhotoListItem}/ > */}
    {/* {photo.map((photo, index) => ( <PhotoListItem key = {index} sampleData = {photo} /> */}
    <PhotoList/>
    <TopicList/>
    
  
    </div>
  );
};

export default App;
