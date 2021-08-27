import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Typography, Paper } from "@material-ui/core";
const Forms = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tages: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const handleFormSubmit = () => {
    console.log("printing data");
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleFormSubmit}
      >
        <Typography variant="h6">Create a memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
      </form>
    </Paper>
  );
};

export default Forms;
