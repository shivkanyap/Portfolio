import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Resume from './Resume'
import About from './About'
import Project from './Project'


const Rout =()=>(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path ="/contact" component={Contact}/>
        <Route path ="/resume" component={Resume}/>
        <Route path ="/about" component={About}/>
        <Route path ="/projects" component={Project}/>
    </Switch>
)
export default Rout