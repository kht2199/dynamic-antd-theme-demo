import * as React from 'react';
import {Suspense, useMemo} from 'react';
import LoadingIndicator from './LoadingIndicator';
import {themes} from '../themes';

interface DynamicThemeProps {
    value: string,
}

export default function DynamicTheme({value}: DynamicThemeProps) {
    const theme = useMemo(() => themes.find(theme => theme.id === value), [value]);
    if (!theme) return null;
    const Component = theme.component;
    return (
        <Suspense fallback={<LoadingIndicator tip="loading"/>}>
            <Component />
        </Suspense>
    );
}