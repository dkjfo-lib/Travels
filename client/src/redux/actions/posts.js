import * as api from "../../api/api";

// Dispatching Action Creator
const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    const action = { type: "POSTS_FETCH", payload: data };
    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};

export default getPosts;
