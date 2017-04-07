import React from 'react'
import { connect } from 'react-redux'
import { getCnodeList } from '../../redux/actions/cnode'
import TopicList from './TopicList.jsx'

function mapStateToProps(state, ownProps) {
    return {
        cnode: state.get('rootReducer').get('cnode')['list']
    }
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        getTopics: function () {
            dispatch(getCnodeList({ tab: ownProps.params.tab }))
        }
    }
}

class TopicListContainer extends React.Component {
    componentDidMount(a) {
        const { getTopics } = this.props
        getTopics()
    }
    componentWillReceiveProps(nextProps) {
        const { getTopics } = this.props
        if (this.props.params.tab != nextProps.params.tab) {
            getTopics()
        }
    }
    render() {
        const { cnode } = this.props
        return (
            <TopicList cnode={cnode}></TopicList>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TopicListContainer)