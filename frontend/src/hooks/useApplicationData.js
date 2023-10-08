import { useReducer } from "react";

// Initial state for the reducer
const initialState = {
  favPhotos: [],
  isModalVisible: null,
};

// The reducer for photolabs project
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
    default:
      return state;
  }
};

function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
