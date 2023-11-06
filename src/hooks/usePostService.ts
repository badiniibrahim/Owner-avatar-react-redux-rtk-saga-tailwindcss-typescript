import { useAppDispatch, useAppSelector } from "../store/hooks";
import { create, deletedPosts, selectPosts } from "../store/posts.slice";
import { Post, PostFormInput } from "../types";
import { useCallback } from "react";

export type PostServiceOperators = {
  posts: Post[];
  createPost: (data: PostFormInput) => void;
  deletePost: (post: Post) => void;
};

export const usePostService = (): Readonly<PostServiceOperators> => {
  const dispatch = useAppDispatch();

  return {
    posts: useAppSelector(selectPosts),

    createPost: useCallback(
      (post: PostFormInput) => {
        dispatch(create({ title: post.title, content: post.content }));
      },
      [dispatch]
    ),
    deletePost: useCallback(
      (post: Post) => {
        dispatch(deletedPosts(post));
      },
      [dispatch]
    ),
  };
};

export default usePostService;
