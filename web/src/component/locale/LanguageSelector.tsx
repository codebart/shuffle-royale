import {Select} from '../ui/Select';
import {currentLanguage, languages} from '../../locale/i18n';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {useState} from 'react';

type LanguageControl = {
    currentLanguage: string;
    changeLanguage(language: string): void;
}

const useLanguageSelector = (): LanguageControl => {
    const {i18n} = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);
    return {
        currentLanguage: selectedLanguage,
        async changeLanguage(language: string): Promise<void> {
            await i18n.changeLanguage(language);
            localStorage.setItem('language', language);
            setSelectedLanguage(language);
        }
    };
};

export const LanguageSelector = () => {
    const {changeLanguage, currentLanguage} = useLanguageSelector();
    return (
        <LanguageSelectorContainer>
            <Select onChange={event => changeLanguage(event.currentTarget.value)} value={currentLanguage}>
                {languages.map(language => <option key={language.code} value={language.code}>{language.flag} {language.name}</option>)}
            </Select>
        </LanguageSelectorContainer>
    );
};

const LanguageSelectorContainer = styled.div`
  position: absolute;
  left: 4rem;
  top: 1rem;

  select {
    height: 2.3rem;
  }
`;