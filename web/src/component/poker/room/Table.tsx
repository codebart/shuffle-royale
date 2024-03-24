import {SeatPosition, seatPositions} from './seatPosition.model';
import {TableBackground} from './TableBackground';
import {BlackRedLogo} from '../../shared/Logo';
import {CardComponent} from '../card/Card';
import {SeatComponent} from '../seat/Seat';
import styled from 'styled-components';
import {TableState} from '../../../model/table.model';

export const Table = () => {
    const table: TableState = {

    } as TableState;
    const positions = seatPositions[table.seats.length];
    return (
        <TableContainer>
            <TableBackground/>
            <LogoContainer>
                <BlackRedLogo/>
            </LogoContainer>
            <SharedCards>
                {table.cards.map((card, index) => <CardComponent key={index} size={120} card={card}/>)}
            </SharedCards>
            <SeatsContainer>
                {table.seats.map((seat, index) => <SeatLocation key={index} position={positions[index]}><SeatComponent roomId={0} index={index} seat={seat}/></SeatLocation>)}
            </SeatsContainer>
        </TableContainer>
    );
};

const TableContainer = styled.div`
  width: 100%;
  position: relative;
`;

const SharedCards = styled.div`
  position: absolute;
  top: 40%;
  left: 25%;
  display: flex;
  column-gap: 0.5rem;
`

const SeatsContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
`

type SeatLocationProps = {
    position: SeatPosition;
}

const SeatLocation = styled.div<SeatLocationProps>`
  grid-column: ${({position}) => position.col};
  grid-row: ${({position}) => position.row};
  align-self: ${({position}) => position.align};
  justify-self: ${({position}) => position.justify};
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  opacity: 0.2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-size: min(1vw, 0.9rem);
  
  div {
    border: none;
  }
`