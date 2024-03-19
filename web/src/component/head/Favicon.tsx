import {Link} from 'react-head';
import React, {useMemo} from 'react';
import {suits} from '../../model/Card';

const randomFavicon = (): string => {
    return `/icon/${suits[Math.floor(Math.random() * 4)]}-32.png`;
};

export const Favicon = () => {
    const favicon = useMemo(randomFavicon, []);
    return <Link rel={'icon'} href={favicon}/>;
};