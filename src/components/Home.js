import React from 'react'
import { Grid ,Cell, Tooltip} from 'react-mdl'
// import Fagithub from 'font-awesome'

class Home  extends React.Component
{
    render()
    {
        return(
            <div style={{width: '100%',margin:'auto',height: '100%'}}>
                <Grid className="home-page">
                    <Cell col={12}>
                    {/* <img 
                    src="https://commons.wikimedia.org/wiki/File:Smiley_Face.JPG"
                    alt="avatar"
                    className="avatar-img"/> */}
                    <div className="banner">
                       <h1>Shivakanya</h1> 
                        <h1> Full Stack Web Developer</h1>
                        <hr/>
                        <p>HTML/CSS| Boostrap | JavaScript | React | NodeJs |MongoDB | Express</p>
                        <div className="social-links">
                        
                            {/*github */}
                            <Tooltip label="LinkdIn Link" large> 
                            <a href="https://github.com/shivkanyap" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github"  aria-hidden="true" ></i>
                            </a>
                            </Tooltip>
                            
                            

                             {/*Linkdin*/}
                             <Tooltip label="LinkdIn Link" large>                  
                            <a href="https://www.linkedin.com/in/shivakanya-p-0571571a4/" rel="noopener noreferrer" target="_blank">
                             <i class="fa fa-linkedin" aria-hidden="true" ></i>
                            </a>
                            </Tooltip> 
                            
                             {/*Linkdin*/}
                             <Tooltip label="Skype Link" large>
                             <a href="skype:live:.cid.d6620276a15793c1" rel="noopener noreferrer" target="_blank">
                             <i class="fa fa-skype" aria-hidden="true" ></i>
                            </a>
                            </Tooltip>
                           
                            

                        </div>
                    </div>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}
export default Home