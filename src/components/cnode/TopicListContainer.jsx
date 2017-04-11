import React from 'react'
import { connect } from 'react-redux'
import { getCnodeList } from '../../redux/actions/cnode'
import TopicList from './TopicList.jsx'
import { getScrollParent, getCurrentDistance } from '../../utils/position'

function mapStateToProps(state, ownProps) {
    return {
        cnode: state.get('rootReducer').get('cnode')['list']
    }
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        getTopics: function (params) {
            params = Object.assign({}, params, { tab: ownProps.params.tab })
            dispatch(getCnodeList(params))
        }
    }
}

class TopicListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.pageIndex = 1
        this.scrollParent = null
    }
    onScrollHandle() {
        const { getTopics, cnode } = this.props
        let currentDistance = getCurrentDistance(this.scrollParent)
        if (currentDistance == 0 && !cnode.isFetching) {
            this.pageIndex += 1
            getTopics({ page: this.pageIndex })
        }

    }
    componentDidMount(a) {
        const { getTopics } = this.props
        this.scrollParent = getScrollParent(document.getElementsByTagName('body')[0])
        this.scrollParent.addEventListener('scroll', this.onScrollHandle.bind(this))
        getTopics({ page: this.pageIndex })
    }
    componentWillReceiveProps(nextProps) {
        const { getTopics } = this.props
        if (this.props.params.tab != nextProps.params.tab) {
            this.pageIndex = 1
            document.getElementsByTagName('body')[0].scrollTop = 0
            getTopics({ page: this.pageIndex })
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