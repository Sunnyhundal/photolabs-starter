import React, { useState } from "react";

import "../styles/HomeRoute.scss";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";


const HomeRoute = (props) => {
  const {topics, photos} = props
  const [ favPhotos, setFavPhotos ] = useState([]);
  
  const showFavPhotos = (id) => favPhotos.includes(id) ? setFavPhotos(favPhotos.filter(photo => photo !== id)) : setFavPhotos([...favPhotos, id]);

  const isFavPhotoExist = favPhotos.length > 0;
  {console.log(favPhotos)}


  return (
    <div className="home-route">
       <TopNavigation topics = {topics} isFavPhotoExist = {isFavPhotoExist} />
       <PhotoList photos = {photos} favPhotos = {favPhotos} showFavPhotos = {showFavPhotos} />
    </div>
  );
};

export default HomeRoute;