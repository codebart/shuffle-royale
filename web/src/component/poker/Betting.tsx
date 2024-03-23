import React, {useCallback} from 'react';
import styled from 'styled-components';
import {Button} from 'component/ui/Button';
import {Input} from 'component/ui/Input';
import {CoinIcon} from 'component/shared/Coins';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import {BettingActionForm, BettingOptions, initialBettingActionForm, PlayerAction} from 'model/betting.model';

export const Betting = ({pot, actions}: BettingOptions) => {
    const {t} = useTranslation();
    const {register, watch, setValue} = useForm<BettingActionForm>({
        defaultValues: initialBettingActionForm
    });
    const changeAction = useCallback((action: PlayerAction) => () => setValue('action', action), [setValue]);
    const changeValue = useCallback((value: number | 'all-in') => () => setValue('value', value), [setValue]);
    const hasOption = useCallback((action: PlayerAction): boolean => !!actions.find(option => option.action === action), []);
    return (
        <BettingContainer>
            <ActionsContainer>
                {hasOption(PlayerAction.FOLD) && <Button onClick={changeAction(PlayerAction.FOLD)}>{t('betting.fold')}</Button>}
                {hasOption(PlayerAction.CALL) && <Button onClick={changeAction(PlayerAction.CALL)}>{t('betting.call')}<CoinIcon/></Button>}
                {hasOption(PlayerAction.CHECK) && <Button onClick={changeAction(PlayerAction.CHECK)}>{t('betting.check')}</Button>}
                {hasOption(PlayerAction.BET) && <Button onClick={changeAction(PlayerAction.BET)}>{t('betting.bet')}</Button>}
                {hasOption(PlayerAction.RAISE) && <Button onClick={changeAction(PlayerAction.RAISE)}>{t('betting.raise')}</Button>}
            </ActionsContainer>
            {(hasOption(PlayerAction.BET) || hasOption(PlayerAction.RAISE)) && (
                <BottomBetSizeRowContainer>
                    <div>
                        <ChooseSizeContainer>
                            <Button onClick={changeValue(0)}>{t('bet.size.min')}</Button>
                            <Button onClick={changeValue(0)}>{t('bet.size.half')}</Button>
                            <Button onClick={changeValue(0)}>{t('bet.size.twoThirds')}</Button>
                            <Button onClick={changeValue(pot)}>{t('bet.size.pot')}</Button>
                            <Button onClick={changeValue('all-in')}>{t('bet.size.allIn')}</Button>
                        </ChooseSizeContainer>
                        <BetSizeSelector min={0} max={1000} {...register('value')} type={'range'}/>
                    </div>
                    <BetSizeContainer>
                        <CoinIcon/><BetSizeInput value={watch('value')} type={'text'}/>
                    </BetSizeContainer>
                </BottomBetSizeRowContainer>
            )}
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
  border: 2px solid ${({theme}) => theme.color.background.lightest};
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
  border: 2px solid ${({theme}) => theme.color.background.lightest};
  padding: 0.5rem;
  justify-content: center;
  background-color: ${({theme}) => theme.color.background.normal};;
`;

const BetSizeInput = styled(Input)`
  background-color: transparent;
  font-size: 2rem;
  width: 100%;
  border: none;
`;

const BetSizeSelector = styled.input`
  width: 100%;
`;