import {darkTheme} from './themes/darkTheme';
import {lightTheme} from './themes/lightTheme';
import {Theme} from './theme';

export type ThemeType = 'light' | 'dark';

type Themes = Record<ThemeType, Theme>;

export const themes: Themes = {
  dark: darkTheme,
  light: lightTheme
}