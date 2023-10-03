import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [isFav, setIsFav] = useState(false);
    const toggleFav = () => { setIsFav(!isFav); };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFav}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFav} displayAlert={false}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;