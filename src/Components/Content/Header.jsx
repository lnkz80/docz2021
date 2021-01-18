import React from 'react';

class Header extends React.Component {
    render(){
        return (
        <div className="header">
        <h1>{this.props.title}</h1>
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

