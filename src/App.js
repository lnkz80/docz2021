import React from 'react'
import {MENU, SUBMENU, SITETITLE} from './Data/settings.js'
import Header from './Components/Content/Header'
import TopMenu from './Components/Menu/TopMenu'
import LeftMenu from './Components/Menu/LeftMenu'
import Content from './Components/Content/Content.jsx'
import { BrowserRouter as Router } from 'react-router-dom'


class App extends React.Component {
  render(){
    return (
      <div className='wrapper'>
        <Router>
        <Header title = {SITETITLE} />
        <TopMenu menu = {MENU} />
        <LeftMenu submenu={SUBMENU['technics']} />        
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