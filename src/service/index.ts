/* eslint-disable @typescript-eslint/no-explicit-any */

import { Post } from "../types";
import apiService from "./apiService";

const api = apiService(`${process.env.REACT_APP_API_BASE_URL}`);

const POSTS_BASE_URL = `/posts`;

export const getPosts = (): Promise<Post[]> => api.get(POSTS_BASE_URL);

export const createPost = (post: Post): Promise<Post> =>
  api.post(POSTS_BASE_URL, post);

export const updatePost = (post: Post): Promise<Post> =>
  api.put(`${POSTS_BASE_URL}/${post.id}`, post);

export const deletePost = (post: Post): Promise<Post> =>
  api.delete(`${POSTS_BASE_URL}/${post.id}`, { data: post });
