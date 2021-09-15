export type CardVariant = 'primary' | 'negative' | 'neutral' | 'positive'

export interface CardProps {
    variant?: CardVariant,
    img1src?: string,
    img1Alt?: string,
    img2src?: string,
    img2Alt?: string,
    title: string,
    description: string,
}

