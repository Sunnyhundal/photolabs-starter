import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const { title } = props;

  return (
    <div className="topic-list__item">
<div>{title}</div>    
</div>
  );
};

export default TopicListItem;
