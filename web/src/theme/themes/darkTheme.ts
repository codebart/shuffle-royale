import {Theme} from 'theme/theme';

export const darkTheme: Theme = {
    scheme: 'dark',
    color: {
        primary: {
            lightest: '#0f427c',
            normal: '#0f427c',
            light: '#125198',
            dark: '#0c3768',
            darkest: 'rgb(0, 0, 0)'
        },
        secondary: {
            lightest: 'rgb(250, 250, 250)',
            light: 'rgb(235, 235, 235)',
            normal: 'rgb(220, 220, 220)',
            dark: 'rgb(205, 205, 205)',
            darkest: 'rgb(190, 190, 190)'
        },
        background: {
            lightest: 'rgb(85, 85, 85)',
            light: 'rgb(70, 70, 70)',
            normal: 'rgb(55, 55, 55)',
            dark: 'rgb(40, 40, 40)',
            darkest: 'rgb(25, 25, 25)'
        },
        predefined: {
            red: 'red',
            black: 'white',
        },
    },
    font: {
        family: `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
        size: {
            mini: '10px',
            tiny: '12px',
            small: '14px',
            medium: '18px',
            large: '22px',
            big: '28px',
            huge: '34px',
        },
        color: 'black'
    },
    spacing: {
        mini: '2px',
        tiny: '4px',
        small: '8px',
        medium: '16px',
        large: '24px',
        big: '32px',
        huge: '40px',
    },
    breakpoints: {
        mobile: '360px',
        tablet: '768px',
        laptop: '1366px',
        desktop: '1920px',
    },
    zIndex: {
        content: 0,
        navbar: 1,
        snackbar: 2,
        modal: 3
    },
    transition: {
        fast: '0.2s',
        normal: '0.5s',
        slow: '0.8s'
    },
    maxContentWidth: '60rem',
    borderRadius: {
        small: '5px',
        medium: '12px',
        large: '25px'
    }
};
