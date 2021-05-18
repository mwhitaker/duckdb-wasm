import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as model from './model';
import Explorer from './explorer';
import { Provider as ReduxProvider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-resizable/css/styles.css';
import 'react-virtualized/styles.css';

export interface EmbedOptions {
    /// The URL of the DuckDB worker script
    workerURL: string;
    /// Render with navigation bar?
    withNavbar: boolean;
}

const store = model.createStore();

export function embed(element: Element, options?: EmbedOptions): void {
    ReactDOM.render(
        <ReduxProvider store={store}>
            <Explorer />
        </ReduxProvider>,
        element,
    );
}
