import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/logo.png";
import Forms from "./components/Forms/Forms";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
        <img src={memories} alt="memories" width="220" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" align="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Forms />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
