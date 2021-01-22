import React from 'react'
import MenuItem from './MenuItem.jsx'

class LeftMenu extends React.Component {
    
    render() {       
        let lmenuout = (this.props.submenu) ? this.props.submenu.map((mitem)=><MenuItem mnuItem={mitem} mnuType={'lmenu'} key={mitem.link} />) : 'Hello, mr. Alex'
        return (
            <div className='lmenu'>
                <ul>            
                    {lmenuout}               
                </ul>
                {/* {console.log(this.props.submenu)} */}
            </div>
        )
        }
    }

export default LeftMenu