import React from 'react'
import MenuItem from './MenuItem.jsx'

class TopMenu extends React.Component {
    
    render(){
        return(
            <div className='tmenu'>            
                <ul>            
                    {
                        this.props.menu.map((mitem)=>{
                            // console.log(mitem.link)
                            return <MenuItem mnuItem={mitem} key={mitem.link} updLeftMenu={this.props.updLeftMenu} />                            
                        })
                    }               
                </ul>            
            </div>  
        )
    }
}
export default TopMenu