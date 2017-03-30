//http://redux.js.org/docs/basics/UsageWithReact.html
import { connect } from 'react-redux'
import { getCnodeList } from '../../redux/actions/cnode'
import TopicList from './TopicList'

function mapStateToProps(state) {
    return state.rootReducer.cnodeTopics
}
function mapDispatchToProps(dispatch) {
    return {
        getCnodeList
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TopicList)