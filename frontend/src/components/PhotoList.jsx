import React from "react";
import useApplicationData from "../hooks/useApplicationData";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { state, dispatch } = useApplicationData();
  const { isNightMode } = state;

  const { photos, showSelected, favPhotos, showFavPhotos, photosByTopic } =
    props;
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          data={photo}
          showSelected={showSelected}
          favPhotos={favPhotos}
          showFavPhotos={showFavPhotos}
          photosByTopic={photosByTopic}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
