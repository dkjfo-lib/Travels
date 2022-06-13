import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getPosts from "./redux/actions/posts";
import Posts from "./components/Posts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
  <div className="App">
    APP
    <Posts/>
  </div>);
}

export default App;
