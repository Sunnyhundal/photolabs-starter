import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const { id, favPhotos, showFavPhotos } = props;

  return (
    <div className="photo-list__fav-icon" onClick={() => showFavPhotos(id)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favPhotos.includes(id)} />
        {/*  With this removed from FavIcon we can see the modal displayed but favicons on the photo do not update */}
      </div>
    </div>
  );
}

export default PhotoFavButton;
