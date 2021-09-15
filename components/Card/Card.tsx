import React from 'react';
import Image from 'next/image'
import { CardProps } from './types'

export const Card: React.FC<CardProps> = ({
    img1src,
    img1Alt,
    img2Alt,
    img2src,
    title,
    description,
    children,
    variant,
}) => {
    if (variant) {
        switch (variant) {
            case 'negative':
                img1src = "/negative-gradient.svg"
                img1Alt = "Negative Gradient"
                img2src = "/negative-face.svg"
                img2Alt = "Negative Face"
                description = description || "This squad is not feeling great"
                break;
            case 'neutral':
                img1src = "/neutral-gradient.svg"
                img1Alt = "Neutral Gradient"
                img2src = "/neutral-face.svg"
                img2Alt = "Neutral Face"
                description = description || "This squad is feeling low"
                break;
            case 'positive':
                img1src = "/positive-gradient.svg"
                img1Alt = "Positive Gradient"
                img2src = "/positive-face.svg"
                img2Alt = "Positive Face"
                description = description || "This squad is feeling great"
                break;
        }
    }

    return (
        <div className="shadow-lg hover:shadow-xl h-full w-full bg-white  border rounded-md border-borderColor">
            <div className="relative w-full h-2/5 p-3 md:p-6 h-[110px] md:h-[131px]">
                <Image
                    src={img1src ? img1src : 'https://via.placeholder.com/374x131.png?text=image'}
                    alt={img1Alt ? img1Alt : ''}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
                <Image
                    src={img2src ? img2src : 'https://via.placeholder.com/374x131.png?text=image'}
                    alt={img2Alt ? img1Alt : ''}
                    className="opacity-50"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />

                <div className="absolute">
                    <h3 className="text-5xl md:text-6xl text-white mb-2 font-semibold">{title}</h3>
                    <h4 className="text-sm md:text-base text-white font-semibold">{description}</h4>
                </div>
            </div>

            <div className="h-3/5 px-3 md:px-6 py-4">
                {children}
            </div>
        </div>
    )
}