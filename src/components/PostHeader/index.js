import React, { Fragment } from "react";
import "./styles.css";

const PostHeader = ({ data }) => (
  <Fragment>
    <div className="post_header">
      <img src={data.avatar} className="post_avatar" />
      <div className="post_author_and_date">
        <strong className="post_author">{data.author}</strong>
        <small className="post_date">há {data.date}</small>
      </div>
    </div>
  </Fragment>
);

export default PostHeader;
