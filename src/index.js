import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'GTM-NNP568M'
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
