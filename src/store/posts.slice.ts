import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../types";
import { RootState } from "./store";

export interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Post>) => {
      state.posts = [
        ...state.posts,
        {
          id: nanoid(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    },
    fetchAllPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },

    deletedPosts: (state, action: PayloadAction<Post>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
  },
});

export const selectPosts = (state: RootState) => state.posts.posts;
export const { create, fetchAllPosts, deletedPosts } = postsSlice.actions;
export default postsSlice.reducer;
