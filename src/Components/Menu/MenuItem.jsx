import React from 'react'
import { NavLink } from 'react-router-dom'

class MenuItem extends React.Component {    
    
    render(){
        const path = window.location.pathname
        const item = this.props.mnuItem
        const link  = this.props.mnuType === 'lmenu' ? path + '/' + item.link : item.link
        const updtMnu = this.props.mnuType === 'lmenu' ? (e)=>{e.preventDefault()} : ()=>{this.props.updLeftMenu(item.link)}
        // console.log(window.location.pathname);
        const number = 1
        return <li><NavLink to={link} onClick={updtMnu}>{item.name}</NavLink>{number}</li>
    }
}

// const MenuItem = ({mnuItem}) => <li><a href={mnuItem.link}>{mnuItem.name}</a></li> 

export default MenuItem