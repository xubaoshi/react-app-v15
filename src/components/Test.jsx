import React from 'react'

class Child extends React.Component {
    constructor(props) {
        super();
        this.state = {
            text: props.text
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            text: nextProps.text
        });
    }

    render() {
        return <p>{this.state.text}</p>
    }
}

export default class Parent extends React.Component {
    state = {
        name: 'xxx'
    }

    render() {
        return (
            <div>
                <Child text={this.state.name} />
                <span>{this.state.name}</span>
                <button onClick={() => this.setState({ name: 'zzz' })}>change</button>
            </div>
        )
    }
}