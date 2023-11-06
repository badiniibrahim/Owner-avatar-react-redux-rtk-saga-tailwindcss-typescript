import { Meta, ComponentStory, StoryObj } from "@storybook/react";
import React from "react";
import PostForm from ".";

export default {
  title: "PostForm",
  component: PostForm,
  parameters: { actions: { argTypesRegex: "^on.*" } },
  decorators: [
    (Story) => (
      <div className="py-4">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof PostForm>;

const Template: ComponentStory<typeof PostForm> = (args) => (
  <PostForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
