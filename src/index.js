import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = configureStore();
const MOUNT_NODE = document.getElementById('root');

const renderApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        MOUNT_NODE
    );
}

renderApp();

registerServiceWorker();

if (module.hot) {
    module.hot.accept('./App', () => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        renderApp();
    })
}