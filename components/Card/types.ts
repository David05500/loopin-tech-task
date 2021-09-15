export type CardVariant = 'primary' | 'negative' | 'neutrial' | 'positive'

export interface CardProps {
    variant?: CardVariant,
    img1src?: string,
    img1Alt?: string,
    img2src?: string,
    img2Alt?: string,
    title: string,
    description: string,
}

