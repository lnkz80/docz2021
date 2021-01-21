import React from 'react'
import {MENU, SUBMENU, SITETITLE} from './Data/settings.js'
import Header from './Components/Content/Header'
import TopMenu from './Components/Menu/TopMenu'
import LeftMenu from './Components/Menu/LeftMenu'
import Content from './Components/Content/Content.jsx'
import { BrowserRouter as Router } from 'react-router-dom'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // dir: SUBMENU['technics']
      dir: ''
    }    
  }

  updLeftMenu = (value) => {
    this.setState({dir: SUBMENU[value]})
  }

  render(){
    return (
      <div className='wrapper'>
        <Router>
        <Header title = {SITETITLE} updLeftMenu={this.updLeftMenu} />
        <TopMenu menu = {MENU} updLeftMenu={this.updLeftMenu} />
        <LeftMenu submenu={this.state.dir} />        
        <Content />                
        </Router>
    </div>
    );
  }
}
export default App;

// function App() {
//   return (
//     <div className='wrapper'>      
//       <Header />
//       <TopMenu />
//       <LeftMenu />
//       <Content />  
//     </div>
//   );
// }