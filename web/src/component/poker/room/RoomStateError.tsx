import styled from 'styled-components';
import {Button} from '../../ui/Button';

export const RoomStateError = ({onRefresh}: {onRefresh: () => void}) => (
    <RoomStateErrorContainer>
        <h2>⚠ Failed to load room</h2>
        <Button onClick={onRefresh}>⟳ Retry</Button>
    </RoomStateErrorContainer>
);

const RoomStateErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;