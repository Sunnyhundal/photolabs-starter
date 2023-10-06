import { useState} from "react";

function useApplicationData() {
  
  const [favPhotos, setFavPhotos] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(null);

  const showFavPhotos = (id) =>
    favPhotos.includes(id)
      ? setFavPhotos(favPhotos.filter((photo) => photo !== id))
      : setFavPhotos([...favPhotos, id]);

    const showSelected = (id) =>
    isModalVisible === id ? setIsModalVisible(null) : setIsModalVisible(id);

  

return { 
  state :{ showFavPhotos, favPhotos, setFavPhotos, showSelected, isModalVisible }
}
}

export default useApplicationData;