import React, { FC } from "react";
import { Post } from "../../types";
import { Trash2 } from "lucide-react";

type Props = {
  post: Post;
  onDeleteClick: (post: Post) => void;
};

const PostCard: FC<Props> = ({ post, onDeleteClick }) => {
  const handleDeleteClick = () => {
    onDeleteClick(post);
  };

  return (
    <div className="flex flex-row border-2 border-indigo dark:text-black mt-4 w-[300px] rounded-sm justify-between px-1 text-black dark:bg-white">
      <span>
        <strong>{post.title}</strong>
      </span>
      <Trash2
        color="red"
        className="cursor-pointer"
        onClick={handleDeleteClick}
      />
    </div>
  );
};

export default PostCard;
