export interface SquadMembers {
    moodPercentage: number,
    name: string
}

export interface SquadPropsData {
    id: number,
    name: string,
    EngagementPercentage: number
    members: SquadMembers[],
}

export interface SquadProps {
    squad: SquadPropsData,
}

export interface SquadServerData {
    squads: SquadPropsData[],
}