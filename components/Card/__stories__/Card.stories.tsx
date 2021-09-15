import React from 'react';
import { Card } from "../Card"
import { ComponentStory } from '@storybook/react';

export default {
	title: 'ui/Card',
	component: Card,
};

const Default: ComponentStory<typeof Card> = (args) => (
	<Card {...args}>
		{args.children}
	</Card>
);

export const Primary = Default.bind({})
Primary.args = {
	title: "Primary Card",
	description: "Primary Card Description",
	variant: "primary",
	img1src: 'https://via.placeholder.com/374x131.png?text=image',
	img1Alt: "Image 1 alt",
	img2src: 'https://via.placeholder.com/374x131.png?text=image',
	img2Alt: "Image 2 alt",
	children: <div>Content</div>
}

export const Negative = Default.bind({})
Negative.args = {
	title: "Negative Card",
	variant: "negative",
	children: <div>Content</div>
}

export const Neutral = Default.bind({})
Neutral.args = {
	title: "Neutral Card",
	variant: "neutral",
	children: <div>Content</div>
}

export const Positive = Default.bind({})
Positive.args = {
	title: "Positive Card",
	description: "Positive Card Description",
	variant: "positive",
	children: <div>Content</div>
}
