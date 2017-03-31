import React, { PropTypes } from 'react'
import Topic from './Topic'

export default class TopicList extends React.Component {
    componentDidMount() {
        const { getTopics } = this.props
        getTopics()
    }
    render() {
        const { cnode, getTopics } = this.props
        var topicsStr = ''
        topicsStr = cnode.topics && cnode.topics.data && cnode.topics.data.map(topic =>
            <Topic key={topic.id} topic={topic}></Topic>
        )
        return (
            <div className="cnodeList">
                <ul>
                    {topicsStr}
                </ul>
            </div>
        )
    }
}
