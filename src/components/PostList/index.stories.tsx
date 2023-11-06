import { ComponentMeta, ComponentStory } from "@storybook/react";
import PostList from ".";

export default {
  title: "PostList",
  component: PostList,
  parameters: { actions: { argTypesRegex: "^on.*" } },
  decorators: [
    (Story) => (
      <div className="py-4 bg-slate-500">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof PostList>;

const Template: ComponentStory<typeof PostList> = (args) => (
  <PostList {...args} />
);

export const OneItem = Template.bind({});
OneItem.args = {
  posts: [
    {
      id: "62219db8-1d5b-4544-bfd0-e12239c2a37e",
      title: "StoryBook 1",
      content: "Description 1",
    },
  ],
};

export const MultipleItems = Template.bind({});
MultipleItems.args = {
  posts: [
    {
      id: "62219db8-1d5b-4544-bfd0-e12239c2a37e",
      title: "StoryBook 1",
      content: "Description 1",
    },
    {
      id: "3c46f121-445d-41aa-a290-25b5fe03f461",
      title: "StoryBook 2",
      content: "Description 2",
    },
    {
      id: "3c46f121-445d-41aa-a290-25b5fe03f461",
      title: "StoryBook 3",
      content: "Description 3",
    },
    {
      id: "3c46f121-445d-41aa-a290-25b5fe03f461",
      title: "StoryBook 4",
      content: "Description 4",
    },
    {
      id: "3c46f121-445d-41aa-a290-25b5fe03f461",
      title: "StoryBook 5",
      content: "Description 5",
    },
    {
      id: "3c46f121-445d-41aa-a290-25b5fe03f461",
      title: "StoryBook 6",
      content: "Description 6",
    },
  ],
};
