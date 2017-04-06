require('es6-promise').polyfill();
require('isomorphic-fetch');

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import './style/sass/mobile.scss'
import 'font-awesome/css/font-awesome.css'

import configureStore from './redux/store/configureStore.jsx'
import Container from './components/Container.jsx'

const store = configureStore({});

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component store={store}></Component>
        </AppContainer>,
        document.getElementById('root')
    )
}

render(Container)


if (module.hot) {
    module.hot.accept('./components/Container.jsx', () => {
        console.log("reload")
        const Container = require('./components/Container.jsx')
        render(Container)
    })
} 