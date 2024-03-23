export type ComponentSize = 'small' | 'medium' | 'large';
export type ExtendedComponentSize = 'mini' | 'tiny' | ComponentSize | 'big' | 'huge';
export type Device = 'mobile' | 'tablet' | 'laptop' | 'desktop';
export type PredefinedColor = 'red' | 'black';
export type ElementType = 'modal' | 'navbar' | 'content' | 'snackbar';
export type TransitionType = 'fast' | 'normal' | 'slow';
export type ColorScheme = 'light' | 'dark';

export type Enumerated<T extends string, O> = Record<T, O>;

export type Color = {
    lightest: string;
    light: string;
    normal: string;
    dark: string;
    darkest: string;
}

export interface Theme {
    scheme: ColorScheme;
    color: {
        primary: Color;
        secondary: Color;
        background: Color;
        predefined: Enumerated<PredefinedColor, string>;
    },
    font: {
        family: string;
        color: string;
        size: Enumerated<ExtendedComponentSize, string>;
    },
    spacing: Enumerated<ExtendedComponentSize, string>;
    breakpoints: Enumerated<Device, string>;
    zIndex: Enumerated<ElementType, number>;
    transition: Enumerated<TransitionType, string>;
    maxContentWidth: string;
    borderRadius: Enumerated<ComponentSize, string>
}