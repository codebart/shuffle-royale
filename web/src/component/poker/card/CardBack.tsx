import React from 'react';
import {heightRatio, widthRatio} from './cardSize';

export const CardBack = ({size}: { size: number }) => (
    <svg viewBox="0 0 64 88" height={size * heightRatio} width={size * widthRatio}>
        <path fill="#FF0000" stroke="none" d="m 5 5 l 0 78 l 54 0 l 0 -78 l -54 0 z"/>
        <path fill="#FFFFFF" stroke="none" d="m 8 8 l 0 72 l 48 0 l 0 -72 l -48 0 z"/>
        <path fill="#FF0000" stroke="none" d="m 11 11 l 0 66 l 42 0 l 0 -66 l -42 0 z"/>
    </svg>
);