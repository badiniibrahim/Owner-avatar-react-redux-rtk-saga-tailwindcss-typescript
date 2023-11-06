import { FC } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { PostFormInput } from "../../types";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

type Props = {
  onSubmitClick(data: PostFormInput): void;
};

const PostForm: FC<Props> = ({ onSubmitClick }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title can't be empty"),
    content: Yup.string().required("Content can't be empty"),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<PostFormInput>({
    defaultValues: {},
    resolver: yupResolver(validationSchema),
  });

  return (
    <>
      <h2>Create Post</h2>
      <form
        className="flex flex-col w-[300px]"
        onSubmit={handleSubmit(onSubmitClick)}
      >
        <label className="dark:text-white text-[10px] text-black">Title</label>
        <input
          {...register("title")}
          type="text"
          placeholder="Title"
          className="rounded-sm px-1 placeholder:text-[10px] text-[10px] h-[25px] border-2 border-indigo dark:bg-white dark:text-black "
        />
        <span className="text-sm text-red-600">{errors.title?.message}</span>

        <label className="text-black text-[10px] pt-2 dark:text-white">
          Content
        </label>
        <input
          placeholder="Content"
          {...register("content")}
          type="text"
          className="border-2 border-indigo dark:bg-white rounded-sm px-1 placeholder:text-[10px] text-[10px] h-[25px]  dark:text-black"
        />
        <span className="text-sm text-red-600">{errors.content?.message}</span>
        <button
          type="submit"
          className="mt-4 bg-yellow-400 rounded-sm text-xs h-7"
        >
          Add new post
        </button>

        <button
          onClick={() => reset()}
          className="mt-4 bg-violet-900 rounded-sm text-xs h-7 text-white"
        >
          Reset
        </button>
      </form>
    </>
  );
};

export default PostForm;
