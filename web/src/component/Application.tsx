import React from 'react';
import GlobalStyle from './style/GlobalStyle';
import {BrowserRouter} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Routing} from './routing/Routing';
import {ThemeContextProvider} from './theme/ThemeContext';
import {HeadProvider} from 'react-head';
import {Favicon} from './head/Favicon';

const queryClient: QueryClient = new QueryClient();

export const Application = () => (
    <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
            <GlobalStyle/>
            <HeadProvider>
                <Favicon/>
            </HeadProvider>
            <BrowserRouter>
                <Routing/>
            </BrowserRouter>
        </ThemeContextProvider>
    </QueryClientProvider>
);