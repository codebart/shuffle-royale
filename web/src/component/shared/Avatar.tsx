import styled from 'styled-components';
import React from 'react';

export const Avatar = ({url}: {url?: string}) => (
    <AvatarContainer src={url ?? '/user.svg'}/>
)

const AvatarContainer = styled.img`
  border-radius: 50%;
  border: 3px solid ${({theme}) => theme.color.background.lightest};
  background-color: ${({theme}) => theme.color.background.light};
  flex-grow: 0;
  flex-shrink: 0;
`