import React, { PropTypes } from 'react'
import Topic from './Topic'
import LoadMore from '../base/load_more'
export default class TopicList extends React.Component {
    render() {
        const { cnode, getTopics } = this.props
        var topicsStr = ''
        if (cnode.get('topics')) {
            topicsStr = cnode.get('topics').map(topic =>
                <Topic key={topic.id + new Date().getTime()} topic={topic}></Topic>
            )
        }
        return (
            <div>
                <div className="content-with-menu">
                    <div className="row">
                        <ul className="data-lst">
                            {topicsStr}
                        </ul>
                    </div>
                    <LoadMore isShow={cnode.get('isFetching')}></LoadMore>
                </div>
               
            </div>
            

        )
    }
}
