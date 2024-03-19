import styled from 'styled-components';
import React from 'react';

export const Avatar = ({url}: {url?: string}) => (
    <AvatarContainer src={url ?? 'user.svg'}/>
)

const AvatarContainer = styled.img`
  border-radius: 50%;
  border: 3px solid lightgray;
  background-color: #DDDDDD;
`