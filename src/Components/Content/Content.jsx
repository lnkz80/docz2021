import React from 'react'
import StartPage from './StartPage'
import Technics from './Technics'
import TechOSR from './Technics/TechOSR'
import TechRSX from './Technics/TechRSX'
import TechREM from './Technics/TechREM'
import TechJRN from './Technics/TechJRN'
import Docs from './Docs'
import Carts from './Carts'
import Libs from './Libs'
import Error from './Error'
import {Switch, Route} from 'react-router-dom'

class Content extends React.Component {    
    render(){        
        
        return(
            <div className='content'>
                   <Switch>
                       <Route exact path="/" component={StartPage} />
{/* 
//!TODO Дописать переход по ссылкам SUBMENU
*/}
                       <Route path="/technics/osr" component={TechOSR} />
                       <Route path="/technics/rsx" component={TechRSX} />
                       <Route path="/technics/rem" component={TechREM} />
                       <Route path="/technics/jrn" component={TechJRN} />
                       
                       <Route path="/technics" component={Technics} />
                       <Route path="/docs" component={Docs} />
                       <Route path="/carts" component={Carts} />
                       <Route path="/libs" component={Libs} />
                       <Route component={Error} />
                   </Switch>
            </div>
        )
    }
}


// function Content(){
//     return (
//         <div className='content'>Content</div>
//     );
// }

export default Content;