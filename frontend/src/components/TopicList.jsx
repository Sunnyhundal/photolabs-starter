import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, photosByTopic } = props;
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          {...props}
          key={topic.id}
          title={topic.title}
          topics={topic.id}
          photosByTopic={photosByTopic}
        />
      ))}
    </div>
  );
};

export default TopicList;
