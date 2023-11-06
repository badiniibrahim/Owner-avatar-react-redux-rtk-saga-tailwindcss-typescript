import { ComponentMeta, ComponentStory } from "@storybook/react";
import PostCard from "./index";

export default {
  title: "PostCard",
  component: PostCard,
  parameters: { actions: { argTypesRegex: "^on.*" } },
  decorators: [
    (Story) => (
      <div className="py-4 bg-slate-600">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  post: { id: "I-jf4js6878rVM79bDAVn", title: "StoryBook", content: "Example" },
};
