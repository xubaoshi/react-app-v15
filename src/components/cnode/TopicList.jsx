import React, { PropTypes } from 'react'
import Topic from './Topic'

export default class TopicList extends React.Component {
    render() {
        const { topics } = this.props
        return (
            <ul>
                {topics.map(topic =>
                    <Topic key={topic.id} topic={topic}></Topic>
                )}

            </ul>
        )
    }
}

TopicList.prototype = {
    topics: PropTypes.array.isRequired
}