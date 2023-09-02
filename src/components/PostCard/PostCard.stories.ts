import type { Meta, StoryObj } from "@storybook/react";

import { PostCard } from "./PostCard";

const meta = {
	title: "Example/PostCard",
	component: PostCard,
	parameters: {},
	tags: ["autodocs"],
	argTypes: {},
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: "Hello World",
		description: "This is a description",
	},
};
