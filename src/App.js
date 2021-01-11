import React from 'react'
import Header from './Components/Content/Header'
import TopMenu from './Components/Menu/TopMenu'
import LeftMenu from './Components/Menu/LeftMenu'
import Content from './Components/Content/Content'

function App() {
  return (
    <div className='wrapper'>      
      <Header />
      <TopMenu />
      <LeftMenu />
      <Content />  
    </div>
  );
}

export default App;
