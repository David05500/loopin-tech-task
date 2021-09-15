import React from 'react';
import Image from 'next/image'
import { Card, CardVariant } from "../Card"
import { SquadPropsData, SquadProps } from './types'


export const Squad: React.FC<SquadProps> = ({ squad }) => {
    const squadStateValue = Math.round(squad.members.reduce((total, val) => total + val.moodPercentage, 0) / squad.members.length)
    let squadCardState: CardVariant = "primary"
    let squadCardDescription = "Description"

    if (squadStateValue >= 60) {
        squadCardState = "positive"
        squadCardDescription = "This squad is feeling great"

    } else if (squadStateValue <= 29) {
        squadCardState = "negative"
        squadCardDescription = "This squad is not feeling great"
    } else {
        squadCardState = "neutral"
        squadCardDescription = "This squad is feeling low"
    }

    return (
        <Card
            img1Alt="Image 1 alt"
            img2Alt="Image 2 alt"
            variant={squadCardState}
            title={`${squadStateValue}%`}
            description={squadCardDescription}
        >
            <div className="flex flex-col">

                <div className="text-xl mb-4 font-bold">
                    {squad.name}
                </div>

                <div className="flex justify-between">
                    <div className="w-1/2 mr-2 border rounded-md border-borderColor p-2 md:p-4">
                        <h3 className="text-sm md:text-base mb-4 font-semibold">Members</h3>
                        <p className="text-3xl font-semibold">{squad.members.length}</p>
                    </div>

                    <div className="w-1/2 ml-2 border rounded-md border-borderColor p-2 md:p-4">
                        <h3 className="text-sm md:text-base mb-4 font-semibold">Engagement</h3>
                        <p className="text-3xl font-semibold">{squad.EngagementPercentage}%</p>
                    </div>
                </div>

                <button className="text-sm text-center mt-4 text-green font-semibold">
                    View Squad
                </button>
            </div>
        </Card>
    )
}
