import React from 'react'
import { connect } from 'react-redux'
import { getCnodeList } from '../redux/actions/cnode'

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

class Parent extends React.Component {
    render() {
        const { getCnodeList } = this.props
        getCnodeList()
        return (
            <div>
                <Child text={this.state.name} />
                <span>{this.state.name}</span>
                <button onClick={() => this.setState({ name: 'zzz' })}>change</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state.rootReducer.cnodeTopics
}
export default connect(mapStateToProps, { getCnodeList })(Parent)
