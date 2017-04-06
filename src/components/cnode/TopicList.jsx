import React, { PropTypes } from 'react'
import Topic from './Topic'
export default class TopicList extends React.Component {
    render() {
        const { cnode, getTopics } = this.props
        var topicsStr = ''
        if(!cnode.isFetching && cnode.topics && cnode.topics.data){
            topicsStr = cnode.topics.data.map(topic =>
                <Topic key={topic.id} topic={topic}></Topic>
            )
        }else{
            topicsStr = '正在搜索...'
        }
        
        return (
            <div className="content-with-menu">
                <div className="row">
                    <ul className="data-lst">
                        {topicsStr}
                    </ul>
                </div>
            </div>
            
        )
    }
}
