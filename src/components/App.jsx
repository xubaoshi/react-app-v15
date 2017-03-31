import React from 'react'
import Test from './Test'
import { Link } from 'react-router'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h2 className="orange">Hello ,React11!</h2>
                <Link to="/topic/list">TopicListWrap</Link>
                {this.props.children}
            </div>
        )
    }
}