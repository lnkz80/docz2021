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
                {/* {console.log(this.props.submenu)} */}
            </div>
        )
        }
    }

export default LeftMenu

// function LeftMenu(){      
//     return(
//         <div className='lmenu'>
//         <nav>
//             <ul>
//                 <li>Техника</li>
//                 <li>Документы</li>
//                 <li>Картриджи</li>
//                 <li>Справочники</li>
//             </ul>
//         </nav>
//     </div>
//     );
// }

// export default LeftMenu;