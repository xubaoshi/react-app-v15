import React from 'react'
import ReactDOM from 'react-dom'

import './style/sass/mobile.scss'

import { AppContainer } from 'react-hot-loader'
import App from './components/App.jsx'


const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./components/App.jsx', () => {
        console.log("reload")
        render(App)
    })
} 