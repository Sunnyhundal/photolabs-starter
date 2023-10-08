import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title, topics, photosByTopic } = props;

  return (
    <div className="topic-list__item">
      <div
        onClick={() => {
          photosByTopic(topics);
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default TopicListItem;
