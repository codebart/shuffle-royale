import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import {Button} from 'component/ui/Button';

enum AutoBetAction {
    FOLD = 'FOLD',
    CHECK_FOLD = 'CHECK_FOLD',
    CHECK = 'CHECK',
    CALL_ANY = 'CALL_ANY'
}

interface AutoBetControl {
    fold: boolean;
    checkFold: boolean;
    check: boolean;
    callAny: boolean;
    change(action: AutoBetAction | null): (checked: boolean) => void;
}

const useAutoBet = (): AutoBetControl => {
    const [action, setAction] = useState<AutoBetAction | null>(null);
    return {
        get fold(): boolean {
            return action === AutoBetAction.FOLD;
        },
        get checkFold(): boolean {
            return action === AutoBetAction.CHECK_FOLD;
        },
        get check(): boolean {
            return action === AutoBetAction.CHECK;
        },
        get callAny(): boolean {
            return action === AutoBetAction.CALL_ANY;
        },
        change(action: AutoBetAction | null): (checked: boolean) => void {
            return (checked: boolean) => setAction(checked ? action : null);
        }
    }
}

export const AutoBet = () => {
    const {callAny, check, checkFold, fold, change} = useAutoBet();
    return (
        <AutoBetContainer>
            <ToggleButton checked={fold} onChange={change(AutoBetAction.FOLD)} text={'Fold'}/>
            <ToggleButton checked={checkFold} onChange={change(AutoBetAction.CHECK_FOLD)} text={'Check/Fold'}/>
            <ToggleButton checked={check} onChange={change(AutoBetAction.CHECK)} text={'Check'}/>
            <ToggleButton checked={callAny} onChange={change(AutoBetAction.CALL_ANY)} text={'Call Any'}/>
        </AutoBetContainer>
    );
};

const AutoBetContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

type ToggleButtonProps = {
    text: string;
    checked: boolean;
    onChange(checked: boolean): void;
}

const ToggleButton = ({text, checked, onChange}: ToggleButtonProps) => {
    const onClick = useCallback(() => {
        onChange(!checked);
    }, [checked, onChange]);
    return (
        <ToggleButtonContainer onClick={onClick}>
            <input checked={checked} type={'checkbox'}/>
            {text}
        </ToggleButtonContainer>
    )
}

const ToggleButtonContainer = styled(Button)`
  display: flex;
  column-gap: 0.5rem;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  
  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;