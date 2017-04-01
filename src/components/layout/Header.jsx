import React, { PropTypes } from 'react'


export default class VHeader extends React.Component {
    constructor(props) {
        super(props)
        this.goBack = this.goBackHandle.bind(this)
    }
    goBackHandle() {
        window.history.back();
    }
    render() {
        const { history } = this.props
        const style = history ? { display: "block" } : { display: "none" };
        return (
            <header className="header">
                <i className="fa fa-arrow-left back" onClick={this.goBack} style={style}></i>
                <h2>cnode</h2>
            </header >
        )
    }
}

VHeader.propTypes = {
    history: PropTypes.bool
}

