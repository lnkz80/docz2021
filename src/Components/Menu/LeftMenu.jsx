import React from 'react'
import MenuItem from './MenuItem.jsx'

class LeftMenu extends React.Component {
    render() {
        return (
            <div className='lmenu'>
                <ul>            
                    {
                        this.props.submenu.map((mitem)=>{
                            return <MenuItem mnuItem={mitem} key={mitem.link} />                            
                            })
                     
                    }               
                </ul>
                {console.log(this.props.submenu)}
            </div>
        )
        }
    }

export default LeftMenu