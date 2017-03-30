import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import './style/sass/mobile.scss'
import configureStore from './redux/store/configureStore.jsx'
import Wrap from './components/Wrap.jsx'

const store = configureStore({});

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component store={store}></Component>
        </AppContainer>,
        document.getElementById('root')
    )
}

render(Wrap)


if (module.hot) {
    module.hot.accept('./components/Wrap.jsx', () => {
        console.log("reload")
        const Wrap = require('./components/Wrap.jsx')
        render(Wrap)
    })
} 