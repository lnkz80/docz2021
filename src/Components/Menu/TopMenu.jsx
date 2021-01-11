import React from 'react'
import {MENU, SUBMENU} from '../../Data/settings.js'
import MenuItem from './MenuItem.jsx'

function TopMenu(){
    // const menuOut = MENU.map((mitem)=>{
    //     return "<li>" + mitem.name + "</li>";
    // }).join('');
    return (
        <div className='tmenu'>            
            <ul>            
                {
                    MENU.map((mitem)=>{
                        return <MenuItem mnuItem={mitem} key={mitem.id} />
                    })
                }               
            </ul>
            {/* {console.log(SUBMENU[MENU[2].link])} */}            
        </div>
        
    );
}

export default TopMenu;