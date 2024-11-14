import React from "react";
import Feed from "./Feed";
import { feedData } from "./datas/feeds";

const FeedList = () => {
  return (
    <div>
      {feedData.map((feed, index) => (
        <Feed
          key={index}
          profileImg={feed.profileImg}
          username={feed.username}
          postImg={feed.postImg}
          caption={feed.caption}
          likes={feed.likes}
          time={feed.time}
          comments={feed.comments}
        />
      ))}
    </div>
  );
};

export default FeedList;
