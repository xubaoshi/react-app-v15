//http://redux.js.org/docs/basics/UsageWithReact.html
import React, { PropTypes } from 'react'
export default class Topic extends React.Component {
    render() {
        const { topic } = this.props
        return (
            <li>
                <a href="javascript:;">
                    <div class="data-hd">
                        <h4>{topic.title}</h4>
                    </div>
                    <div class="data-bd">
                        <p class="data-vertical">作者：{topic.author.loginname}</p>
                        <p class="data-vertical">发布日期：{topic.create_at}</p>
                        <p class="data-vertical">访问量:{topic.visit_count}</p>
                    </div>
                </a>
            </li>
        )
    }
}

Topic.propTypes = {
    topic: PropTypes.object.isRequired
}