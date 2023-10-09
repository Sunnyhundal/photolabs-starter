import { useReducer, useEffect } from "react";

export const ACTIONS = {
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTO_BY_TOPIC: "GET_PHOTO_BY_TOPIC",
};

// Define the initial state for the reducer
const initialState = {
  favPhotos: [],
  photoData: [],
  topicData: [],
  isModalVisible: null,
  photoTopic: null,
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    // If the favPhotos array already includes the id of the photo that was clicked on, then filter out that id from the array. If it doesn't include the id, then add it to the array.
    case "TOGGLE_FAV":
      if (state.favPhotos.includes(action.id)) {
        return {
          ...state,
          favPhotos: state.favPhotos.filter((photoId) => photoId !== action.id),
        };
      } else {
        return {
          ...state,
          favPhotos: [...state.favPhotos, action.id],
        };
      }

    // Default state of modal is null, so if it's null, set it to the id of the photo that was clicked on to open the modal (action.id) and if it's not null, set it back to null.
    case "TOGGLE_MODAL":
      return {
        ...state,
        isModalVisible: state.isModalVisible === action.id ? null : action.id,
      };
    case "SET_PHOTO_DATA":
      return { ...state, photoData: action.payload };
    case "SET_TOPIC_DATA":
      return { ...state, topicData: action.payload };
    case "GET_PHOTO_BY_TOPIC":
      return { ...state, photoTopic: action.payload };

    default:
      return state;
  }
};

function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      );
  }, []);

  useEffect(() => {
    if (state.photoTopic !== null)
      fetch(`/api/topics/photos/${state.photoTopic}`)
        .then((response) => response.json())
        .then((data) =>
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
        );
  }, [state.photoTopic]);

  const showFavPhotos = (id) => {
    dispatch({ type: "TOGGLE_FAV", id });
  };

  const showSelected = (id) => {
    dispatch({ type: "TOGGLE_MODAL", id });
  };
  const photosByTopic = (topic) => {
    dispatch({ type: ACTIONS.GET_PHOTO_BY_TOPIC, payload: topic });
  };

  return {
    state,
    showFavPhotos,
    showSelected,
    photosByTopic,
  };
}

export default useApplicationData;
