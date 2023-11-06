import React, { FC, useId } from "react";
import { Post } from "../../types";
import PostCard from "../PostCard";

type Props = {
  posts: Post[];
  onDeletePost: (post: Post) => void;
};

const PostList: FC<Props> = ({ posts, onDeletePost }) => {
  const id = useId();
  return (
    <>
      {posts.map((post) => {
        return (
          <PostCard
            key={`${id}-${post.id}`}
            post={post}
            onDeleteClick={onDeletePost}
          />
        );
      })}
    </>
  );
};

export default PostList;
