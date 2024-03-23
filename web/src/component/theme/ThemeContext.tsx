import {createContext, Dispatch, ReactElement, useContext, useReducer} from 'react';

import {ThemeProvider} from 'styled-components';
import {Theme} from 'theme/theme';
import {themes, ThemeType} from 'theme/themes';

type CurrentTheme = {
    theme: Theme;
    type: ThemeType;
}

type ThemeContextState = {
    current: CurrentTheme;
    changeTheme: Dispatch<ThemeType>
}

const ThemeContext = createContext<ThemeContextState>({} as ThemeContextState);

const reducer = (state: CurrentTheme, action: ThemeType): CurrentTheme => {
    return {
        theme: themes[action],
        type: action
    }
}

type ThemeContextProviderProps = {
    children: ReactElement[];
}

const initialState: CurrentTheme = {
    theme: themes.light,
    type: 'light'
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [current, changeTheme] = useReducer(reducer, initialState);
    return (
        <ThemeContext.Provider value={{ current, changeTheme }}>
            <ThemeProvider theme={current.theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => {
    return useContext(ThemeContext)
}