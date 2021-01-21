import React from 'react'
import { NavLink } from 'react-router-dom'

class MenuItem extends React.Component {    
    
    render(){        
        // console.log(window.location.pathname);
        const item = this.props.mnuItem
        return <li><NavLink to={item.link} onClick={()=>{this.props.updLeftMenu(item.link)}}>{item.name}</NavLink></li>
    }
}

// const MenuItem = ({mnuItem}) => <li><a href={mnuItem.link}>{mnuItem.name}</a></li> 

export default MenuItem