import React from 'react';
import { Card } from "../Card"
import { ComponentStory } from '@storybook/react';

export default {
	title: 'ui/Card',
	component: Card,
};

const Default: ComponentStory<typeof Card> = (args) => (
	<Card {...args}>
		<div className="flex flex-col">
			<div className="text-xl mb-4 font-bold">
				Card sub-title
			</div>

			<div className="flex justify-between">
				<div className="w-1/2 mr-2 border rounded-md border-borderColor p-2 md:p-4">
					<h3 className="text-sm md:text-base mb-4 font-semibold">Section 1</h3>
					<p className="text-3xl font-semibold">Section 1 content</p>
				</div>

				<div className="w-1/2 ml-2 border rounded-md border-borderColor p-2 md:p-4">
					<h3 className="text-sm md:text-base mb-4 font-semibold">Section 2</h3>
					<p className="text-3xl font-semibold">Section 1 content</p>
				</div>
			</div>

			<button className="text-sm text-center mt-4 text-green font-semibold">
				action button
			</button>
		</div>
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
	img2Alt: "Image 2 alt"
}

export const Negative = Default.bind({})
Negative.args = {
	title: "Negative Card",
	variant: "negative"
}

export const Neutral = Default.bind({})
Neutral.args = {
	title: "Neutral Card",
	variant: "neutral"
}

export const Positive = Default.bind({})
Positive.args = {
	title: "Positive Card",
	description: "Positive Card Description",
	variant: "positive"
}
