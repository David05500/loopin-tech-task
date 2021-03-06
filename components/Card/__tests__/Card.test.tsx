import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Primary as CardStory } from '../__stories__/Card.stories';

describe("Card", () => {
	it("should render", () => {
		render(
			<CardStory
				title="Card Title"
				description="Card Description"
			/>
		)
		expect(screen.getByText('Card Description')).toBeDefined();
		expect(screen.getByText('Card Title')).toBeDefined();
	});
});