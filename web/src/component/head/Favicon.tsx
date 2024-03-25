import {Link} from 'react-head';
import React, {useMemo} from 'react';
import {suits} from 'model/card.model';

const randomFavicon = (): string => {
    return `/icon/${suits[Math.floor(Math.random() * suits.length)]}-32.png`;
};

export const Favicon = () => {
    const favicon = useMemo(randomFavicon, []);
    return <Link rel={'icon'} href={favicon}/>;
};