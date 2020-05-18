import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import Rout from './components/Route'
import {Link } from 'react-router-dom'


function App() {
  return (
    <div >
     
     {/* <FaBars size="2rem"/> */}
     
     
     <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="My Portfolio" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to='/resume'>Resume</Link>

            </Navigation>
        </Header>
        <Drawer title="My Portfolio">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contacts</Link>
                <Link to="/resume" >Resume</Link>
                
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Rout/>
        </Content>
    </Layout>
</div>
      
     
      

    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <Link
    //       className="App-link"
    //       to="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </Link>
    //   </header>
    // </div>
  )
}

export default App;
