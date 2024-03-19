import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import {Button} from '../ui/Button';

export const Betting = () => {
    return (
        <BettingContainer>
            <ActionsContainer>
                <Button>Fold</Button>
                <Button>Call 🪙</Button>
                <Button>Check</Button>
                <Button>Bet</Button>
                <Button>Raise</Button>
            </ActionsContainer>
            <BottomBetSizeRowContainer>
                <div>
                    <ChooseSizeContainer>
                        <Button>Min</Button>
                        <Button>1/2</Button>
                        <Button>2/3</Button>
                        <Button>Pot</Button>
                        <Button>All in</Button>
                    </ChooseSizeContainer>
                    <BetSizeSelector type={'range'}/>
                </div>
                <BetSizeContainer>
                    🪙<BetSizeInput type={'text'}/>
                </BetSizeContainer>
            </BottomBetSizeRowContainer>
        </BettingContainer>
    );
};

const BottomBetSizeRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 1rem;
`;

const BettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.5rem;
  border: 2px solid lightgray;
  margin: 0.5rem;
  width: 40rem;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 4rem;
  font-size: 2rem;
`;

const ChooseSizeContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 1.2rem;
`;

const BetSizeContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: 4rem;
  font-size: 2rem;
  align-items: center;
  border: 2px solid lightgray;
  padding: 0.5rem;
  justify-content: center;
`;

const BetSizeInput = styled.input`
  background-color: transparent;
  font-size: 2rem;
  width: 100%;
`;

const BetSizeSelector = styled.input`
  width: 100%;
`;