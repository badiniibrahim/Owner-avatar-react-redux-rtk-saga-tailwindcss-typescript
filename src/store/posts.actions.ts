import { createAction } from "@reduxjs/toolkit";
import { Post } from "../types";

export const create = createAction<Post>("/posts/create");
export const deletedPost = createAction<Post>("/posts/delete");
