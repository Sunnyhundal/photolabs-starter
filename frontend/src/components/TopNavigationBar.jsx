import React, { useState } from "react";
import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import useApplicationData, { ACTIONS } from "hooks/useApplicationData";

const TopNavigation = (props) => {
  const { topics, favPhoto } = props;
  const { isFavPhotoExist } = props;
  const { photosByTopic } = props;

  return (
    <div className={`App ${props.isNightMode ? "night-mode" : ""}`}>
      <div className="top-nav-bar">
        <span className="top-nav-bar__logo">PhotoLabs</span>

        <TopicList topics={topics} photosByTopic={photosByTopic} />
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
        <button onClick={props.handleNightModeToggle}>
          {props.isNightMode ? "Switch to Day Mode" : "Switch to Night Mode"}
        </button>
      </div>
    </div>
  );
};

export default TopNavigation;
