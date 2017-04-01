import React from 'react'
import { Link } from 'react-router'

export default class Menu extends React.Component {
    render() {
        return (
            <div>
                <ul className="menu-list">
                    <li>
                        <Link className="menu-item" activeClassName="menu-on" to="/all"><i className="fa fa-home"></i></Link>
                    </li>
                    <li>
                        <Link className="menu-item" activeClassName="menu-on" to="/ask"><i className="fa fa-question"></i></Link>
                    </li>
                    <li>
                        <Link className="menu-item" activeClassName="menu-on" to="/share"><i className="fa fa-share-alt-square"></i></Link>
                    </li>
                    <li>
                        <Link className="menu-item" activeClassName="menu-on" to="/good"><i className="fa fa-dashcube"></i></Link>
                    </li >
                </ul >
            </div >
        )
    }
}