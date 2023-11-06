import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import usePostService from "../hooks/usePostService";

const Home = () => {
  const { createPost, posts, deletePost } = usePostService();

  return (
    <div className="flex flex-col bg-white dark:bg-black h-screen items-center">
      <PostForm onSubmitClick={createPost} />
      <PostList posts={posts} onDeletePost={deletePost} />
    </div>
  );
};

export default Home;
