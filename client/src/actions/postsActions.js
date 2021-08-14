import * as api from "../api";

// Action creators

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const dispatchedAction = { type: "FETCH_ALL", payload: data };
    dispatch(dispatchedAction);
  } catch (error) {
    console.log(error.message);
  }
};
