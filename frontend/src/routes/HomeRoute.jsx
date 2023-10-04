import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";


const HomeRoute = (props) => {
  const {topics, photos, showSelected} = props
  return (
    <div className="home-route">
       <TopNavigation topics = {topics} />
       <PhotoList photos = {photos} showSelected = {showSelected} />
    </div>
  );
};

export default HomeRoute;