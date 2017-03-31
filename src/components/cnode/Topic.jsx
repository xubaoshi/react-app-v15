//http://redux.js.org/docs/basics/UsageWithReact.html
import React, { PropTypes } from 'react'
export default class Topic extends React.Component {
    render() {
        const { topic } = this.props
        return (
            <li>
                <a href="javascript:;">
                    <div className="data-hd">
                        <h4>{topic.title}</h4>
                    </div>
                    <div className="data-bd">
                        <p className="data-vertical">作者：{topic.author.loginname}</p>
                        <p className="data-vertical">发布日期：{topic.create_at}</p>
                        <p className="data-vertical">访问量:{topic.visit_count}</p>
                    </div>
                </a>
            </li>
        )
    }
}

Topic.propTypes = {
    topic: PropTypes.object.isRequired
}