import { useSelector } from "react-redux";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return <div>
      Post
  </div>;
};

export default Posts;
