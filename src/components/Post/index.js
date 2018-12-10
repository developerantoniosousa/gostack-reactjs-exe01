import React from "react";
import "./styles.css";

import PostHeader from "../PostHeader";

const Post = props => (
  <div className="post">
    <PostHeader data={props.data} />
    <p className="post_content">{props.data.content}</p>
  </div>
);

export default Post;
