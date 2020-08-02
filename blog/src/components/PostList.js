import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/";

const PostList = ({ fetchPosts }) => {
  useEffect(() => {
    console.log("this is from PostList useEffect");
    fetchPosts();
  });

  return <div className="ui container">Post List</div>;
};

export default connect(null, { fetchPosts })(PostList);
