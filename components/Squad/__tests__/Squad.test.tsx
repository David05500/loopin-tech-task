import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import { Squad } from '../Squad'

const squads = [
    {
        id: 1,
        name: "Justice League",
        EngagementPercentage: 64,
        members: [
            {
                name: "Diana Prince",
                moodPercentage: 99,
            },
            {
                name: "Clark Kent",
                moodPercentage: 88,
            },
            {
                name: "Bruce Wayne",
                moodPercentage: 99,
            },
        ],
    },
    {
        id: 2,
        name: "Suicide Squad",
        EngagementPercentage: 10,
        members: [
            {
                name: "Harley Quinn",
                moodPercentage: 20,
            },
            {
                name: "Bloodsport",
                moodPercentage: 10,
            },
            {
                name: "Peacemaker",
                moodPercentage: 8,
            },
        ],
    },
    {
        id: 3,
        name: "The Avengers",
        EngagementPercentage: 60,
        members: [
            {
                name: "Tony Stark",
                moodPercentage: 61,
            },
            {
                name: "Bruce Banner",
                moodPercentage: 62,
            },
            {
                name: "Peter Parker",
                moodPercentage: 63,
            },
        ],
    },
]

describe("Squad", () => {
    afterEach(() => {
        jest.resetModules();
        cleanup();
    })

    it("should render right amount of input data", () => {
        render(
            <div>
                {squads.map(squad =>
                    <Squad
                        squad={squad}
                        key={squad.id}
                    />
                )}
            </div>
        );

        squads.forEach((e, i) => {
            expect(screen.getByText(`${e.name}`)).toBeDefined();

        });
    });
});
