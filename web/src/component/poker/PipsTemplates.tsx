import styled from 'styled-components';

export const Pip = styled.div``;

const PipsContainer = styled.div`
  height: calc(100% - 5em);
  width: calc(100% - 5em);
  padding: 2.5em;
`;

const Pips2 = styled(PipsContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 100%;

  ${Pip} {
    grid-column: 2;
  }
`;

const Pips3 = styled(PipsContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 45%;

  ${Pip} {
    grid-column: 2;
  }
`;

const Pips4 = styled(PipsContainer)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 100%;
  column-gap: 30%;
`;

const Pips5 = styled(PipsContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 45%;

  ${Pip}:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }

  ${Pip}:nth-child(2) {
    grid-column: 3;
    grid-row: 1;
  }

  ${Pip}:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
  }

  ${Pip}:nth-child(4) {
    grid-column: 1;
    grid-row: 3;
  }

  ${Pip}:nth-child(5) {
    grid-column: 3;
    grid-row: 3;
  }
`;

const Pips6 = styled(PipsContainer)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  row-gap: 45%;
  column-gap: 30%;
`;

const Pips7 = styled(PipsContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  row-gap: 25%;
  
  ${Pip}:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }
  ${Pip}:nth-child(2) {
    grid-column: 3;
    grid-row: 1;
  }
  ${Pip}:nth-child(3) {
    grid-column: 1;
    grid-row: 3;
  }
  ${Pip}:nth-child(4) {
    grid-column: 3;
    grid-row: 3;
  }
  ${Pip}:nth-child(5) {
    grid-column: 1;
    grid-row: 5;
  }
  ${Pip}:nth-child(6) {
    grid-column: 3;
    grid-row: 5;
  }
  ${Pip}:nth-child(7) {
    grid-column: 2;
    grid-row: 2;
  }
`;

const Pips8 = styled(PipsContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  row-gap: 25%;
  
  ${Pip}:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }
  ${Pip}:nth-child(2) {
    grid-column: 3;
    grid-row: 1;
  }
  ${Pip}:nth-child(3) {
    grid-column: 1;
    grid-row: 3;
  }
  ${Pip}:nth-child(4) {
    grid-column: 3;
    grid-row: 3;
  }
  ${Pip}:nth-child(5) {
    grid-column: 1;
    grid-row: 5;
  }
  ${Pip}:nth-child(6) {
    grid-column: 3;
    grid-row: 5;
  }
  ${Pip}:nth-child(7) {
    grid-column: 2;
    grid-row: 2;
  }
  ${Pip}:nth-child(8) {
    grid-column: 2;
    grid-row: 4;
  }
`;

const Pips9 = styled(PipsContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 1fr);
  row-gap: 15%;
  
  ${Pip}:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }
  ${Pip}:nth-child(2) {
    grid-column: 1;
    grid-row: 3;
  }
  ${Pip}:nth-child(3) {
    grid-column: 1;
    grid-row: 5;
  }
  ${Pip}:nth-child(4) {
    grid-column: 1;
    grid-row: 7;
  }
  ${Pip}:nth-child(5) {
    grid-column: 3;
    grid-row: 1;
  }
  ${Pip}:nth-child(6) {
    grid-column: 3;
    grid-row: 3;
  }
  ${Pip}:nth-child(7) {
    grid-column: 3;
    grid-row: 5;
  }
  ${Pip}:nth-child(8) {
    grid-column: 3;
    grid-row: 7;
  }
  ${Pip}:nth-child(9) {
    grid-column: 2;
    grid-row: 4;
  }
`;

const Pips10 = styled(PipsContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 1fr);
  row-gap: 15%;
  
  ${Pip}:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }
  ${Pip}:nth-child(2) {
    grid-column: 1;
    grid-row: 3;
  }
  ${Pip}:nth-child(3) {
    grid-column: 1;
    grid-row: 5;
  }
  ${Pip}:nth-child(4) {
    grid-column: 1;
    grid-row: 7;
  }
  ${Pip}:nth-child(5) {
    grid-column: 3;
    grid-row: 1;
  }
  ${Pip}:nth-child(6) {
    grid-column: 3;
    grid-row: 3;
  }
  ${Pip}:nth-child(7) {
    grid-column: 3;
    grid-row: 5;
  }
  ${Pip}:nth-child(8) {
    grid-column: 3;
    grid-row: 7;
  }
  ${Pip}:nth-child(9) {
    grid-column: 2;
    grid-row: 2;
  }
  ${Pip}:nth-child(10) {
    grid-column: 2;
    grid-row: 6;
  }
`;

export const numberPipComponentType = {
    [2]: Pips2,
    [3]: Pips3,
    [4]: Pips4,
    [5]: Pips5,
    [6]: Pips6,
    [7]: Pips7,
    [8]: Pips8,
    [9]: Pips9,
    [10]: Pips10,
}
