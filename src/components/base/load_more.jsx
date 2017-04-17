import React,{PropTypes} from 'react'
export default class LoadMore extends React.Component {
    render() {
        const style = this.props.isShow ? {display:'block'}:{display:'none'}
        return (
            <div className="load-more" style={style}>
                <img src="../img/loading.gif"   alt=""/>
            </div >
        )
    }
}
LoadMore.prototypes = {
    isShow:PropTypes.bool
}