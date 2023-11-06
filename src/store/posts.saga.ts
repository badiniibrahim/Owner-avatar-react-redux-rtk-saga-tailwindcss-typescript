import { SagaIterator } from "@redux-saga/core";
import { call, takeEvery } from "redux-saga/effects";
import { Post } from "../types";
import { createPost, deletePost } from "../service";
import { create, deletedPosts } from "./posts.slice";

function* onCreatePost({
  payload,
}: {
  type: typeof create;
  payload: Post;
}): SagaIterator {
  yield call(createPost, payload);
}

function* onDeletePost({
  payload,
}: {
  type: typeof deletedPosts;
  payload: Post;
}): SagaIterator {
  yield call(deletePost, payload);
}

export function* postsWatcherSaga(): SagaIterator {
  yield takeEvery(create.type, onCreatePost);
  yield takeEvery(deletedPosts.type, onDeletePost);
}

export default postsWatcherSaga;
