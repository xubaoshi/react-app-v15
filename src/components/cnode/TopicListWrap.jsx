//http://redux.js.org/docs/basics/UsageWithReact.html
import { connect } from 'react-redux'
import { getCnodeList } from '../../redux/actions/cnode'
import TopicList from './TopicList.jsx'

function mapStateToProps(state) {
    return {
        cnode: state.rootReducer.cnode.list
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getTopics: function () {
            dispatch(getCnodeList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicList)