import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  const storedPosts = useSelector((globalState) => globalState.postsReducers);
  console.log(
    "🚀 ~ file: Posts.js ~ line 9 ~ Posts ~ storedPosts",
    storedPosts
  );

  return (
    <Fragment>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </Fragment>
  );
};

export default Posts;
