import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render(){
        return (
        <div className="header">
        <h1><NavLink to="/" onClick={()=>{this.props.updLeftMenu('')}}>{this.props.title}</NavLink></h1>
        </div>
    )
    }
}
export default Header; 

// function Header(){
//     return (    
//     <div className="header">
//         <h1>Docz 2021</h1>        
//     </div>
//     );
// }

