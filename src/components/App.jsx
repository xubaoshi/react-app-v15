import React from 'react'
import Menu from './layout/Menu.jsx'
import VHeader from './layout/Header.jsx'
import { Link } from 'react-router'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <VHeader history={false}></VHeader>
                {this.props.children}
                <Menu></Menu>
            </div>
        )
    }
}