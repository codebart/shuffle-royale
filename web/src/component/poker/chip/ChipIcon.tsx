import {ChipValue} from '../../../model/chip.model';
import React from 'react';

type ChipColor = {
    light: string;
    dark: string;
}

const chipColors: Record<ChipValue, ChipColor> = {
    ['1']: {light: 'red', dark: 'darkred'},
    ['10']: {light: 'blue', dark: 'darkblue'},
    ['100']: {light: 'forestgreen', dark: 'darkgreen'},
    ['1K']: {light: 'plum', dark: 'orchid'},
    ['10K']: {light: 'gold', dark: 'goldenrod'},
    ['100K']: {light: 'orange', dark: 'darkorange'},
    ['1M']: {light: 'purple', dark: 'indigo'},
    ['10M']: {light: 'sienna', dark: 'saddlebrown'},
    ['100M']: {light: 'silver', dark: 'slategrey'},
};

export const ChipIcon = ({value}: { value: ChipValue }) => (
    <svg viewBox="-64 -64 128 128" width={32} height={32}>
        <path fill={chipColors[value].light} d="M -64 0 A 1 1 0 0 0 64 0 A 1 1 0 0 0 -64 0 Z"/>
        <path fill={chipColors[value].light} d="M -61 0 A 1 1 0 0 0 61 0 A 1 1 0 0 0 -61 0 Z"/>
        <path fill="#FFFFFF" d="M -47 0 A 1 1 0 0 0 47 0 A 1 1 0 0 0 -47 0 M -10 -49 L -10 -63 L 10 -63 L 10 -49 L -10 -49 M -10 49 L -10 63 L 10 63 L 10 49 L -10 49 M -49 -10 L -63 -10 L -63 10 L -49 10 L -49 -10 M 49 -10 L 49 10 L 63 10 L 63 -10 L 49 -10 M -28 -41 L -41 -28 L -51 -38 L -38 -51 L -28 -41 M -41 28 L -28 41 L -38 51 L -51 38 L -41 28 M 28 41 L 41 28 L 51 38 L 38 51 L 28 41 M 41 -28 L 28 -41 L 38 -51 L 51 -38 L 41 -28"/>
        <path fill={chipColors[value].light} d="M -50 0 A 1 1 0 0 0 50 0 A 1 1 0 0 0 -50 0 Z"/>
        <path fill={chipColors[value].dark} d="M -47 0 A 1 1 0 0 0 47 0 A 1 1 0 0 0 -47 0 Z"/>
    </svg>
);
