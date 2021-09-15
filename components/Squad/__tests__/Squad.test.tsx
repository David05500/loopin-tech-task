import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
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
                moodPercentage: 49,
            },
            {
                name: "Bloodsport",
                moodPercentage: 48,
            },
            {
                name: "Peacemaker",
                moodPercentage: 47,
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
                moodPercentage: 0,
            },
            {
                name: "Bruce Banner",
                moodPercentage: 0,
            },
            {
                name: "Peter Parker",
                moodPercentage: 5,
            },
        ],
    },
]

describe("Squad", () => {
    it("should render right amount of squads with correct state variant", () => {
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
        expect(screen.getByText("This squad is not feeling great")).toBeDefined();
        expect(screen.getByText("This squad is feeling great")).toBeDefined();
        expect(screen.getByText("This squad is feeling low")).toBeDefined();
    });
});
