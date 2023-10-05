import React from "react";


import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  const {photos, showSelected, favPhotos, showFavPhotos} = props;
  return (
    <ul className="photo-list">
      {photos.map(photo  =>  <PhotoListItem key = {photo.id} data = {photo} showSelected = {showSelected} favPhotos = {favPhotos} showFavPhotos = {showFavPhotos} />)}
    </ul>
  );
};

export default PhotoList;