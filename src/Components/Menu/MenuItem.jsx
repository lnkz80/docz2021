import React from 'react'

class MenuItem extends React.Component {    
    render(){
        const item = this.props.mnuItem
        return <li><a href={item.link}>{item.name}</a></li>        
    }
}

// const MenuItem = ({mnuItem}) => <li><a href={mnuItem.link}>{mnuItem.name}</a></li> 

export default MenuItem