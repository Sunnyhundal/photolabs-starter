import { useReducer, useEffect } from "react";

export const ACTIONS = {
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA"
};

// Define the initial state for the reducer
const initialState = {
  favPhotos: [],
  photoData: [],
  topicData: [],
  isModalVisible: null,
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
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
    case "TOGGLE_MODAL":
      return {
        ...state,
        isModalVisible: state.isModalVisible === action.id ? null : action.id,
      };
    case "SET_PHOTO_DATA":
      return { ...state, photoData: action.payload };
    case "SET_TOPIC_DATA":
        return { ...state, topicData: action.payload };
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

  const showFavPhotos = (id) => {
    dispatch({ type: "TOGGLE_FAV", id });
  };

  const showSelected = (id) => {
    dispatch({ type: "TOGGLE_MODAL", id });
  };

  return {
    state,
    showFavPhotos,
    showSelected,
  };
}

export default useApplicationData;
