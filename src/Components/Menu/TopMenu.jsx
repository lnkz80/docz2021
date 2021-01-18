import React from 'react'
import MenuItem from './MenuItem.jsx'

class TopMenu extends React.Component {
    render(){
        return(
            <div className='tmenu'>            
                <ul>            
                    {
                        this.props.menu.map((mitem)=>{
                            return <MenuItem mnuItem={mitem} key={mitem.link} />
                        })
                    }               
                </ul>
            {/* {console.log(SUBMENU[MENU[2].link])} */}            
            </div>  
        )
    }
}
export default TopMenu

// function TopMenu(){
//     // const menuOut = MENU.map((mitem)=>{
//     //     return "<li>" + mitem.name + "</li>";
//     // }).join('');
//     return (
//         <div className='tmenu'>            
//             <ul>            
//                 {
//                     MENU.map((mitem)=>{
//                         return <MenuItem mnuItem={mitem} key={mitem.id} />
//                     })
//                 }               
//             </ul>
//             {/* {console.log(SUBMENU[MENU[2].link])} */}            
//         </div>
        
//     );
// }