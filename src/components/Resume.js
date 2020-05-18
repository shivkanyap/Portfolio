import React from 'react'
import {Grid,Cell,} from 'react-mdl'
import Education from './education'
import Skills from './skills'

class Resume  extends React.Component
{
    render()
    {
        return(
            <div>
               <Grid>
                   <Cell col={4}>
                       <div style={{textAlign:'center'}}>
                           <img src={require('../assests/IMG_2121.JPG')}
                           alt="avatar"
                           style={{height:'200px'}}/>
                       </div>
                       <h2 className="resume-r-r">Shivakanya</h2>
                       <h4 style={{color:'grey'}}>Programming</h4>
                       <hr style={{borderTop:' 3px solid #833fb2',width:'50%'}}/>
                       <p>Hello ! I'm Shivakanya, a software enginner from  Bengalure
                           I am a Full Stack Developer 
                       </p>
                       <hr style={{borderTop:' 3px solid #833fb2',width:'50%'}}/>
                       <h3>Address</h3>
                       <p>Murgeshpally , Old Airport Road Bengalure</p>
                       <hr style={{borderTop:' 3px solid #833fb2',width:'50%'}}/>
                       <h3>Phone</h3>
                       <p>+8317418780</p>
                       <p>7259692568</p>
                       <hr style={{borderTop:' 3px solid #833fb2',width:'50%'}}/>
                       <h3>Email</h3>
                       <p>shivkanyapatil51@gmail.com</p>
                   </Cell>
                   <Cell  className="resume-r" col={8}>
                      <h2>Education</h2>
                      <Education 
                      startYear={2013}
                      endYear={2017}
                      schoolName={'Engineering'}
                      schooldesc={'I completed my Degree in Computer Science and Engineering with 65% from BKIT '}
                      />
                       <Education
                      startYear={2011}
                      endYear={2013}
                      schoolName={"12th"}
                      schooldesc={' From SSV in Bidar'}/>

                      <Education
                      startYear={2010}
                      endYear={2011}
                      schoolName={"10th"}
                      schooldesc={'Complted schooling from GNPS Bidar '}/>

                      <hr style={{borderTop:' 3px solid #833fb2',width:'50%'}}/>
                      <h2>Skills</h2>
                      <Skills skill="javascript" progress={80} />
                        <Skills skill="HTML/CSS" progress={80} />
                        <Skills skill="ReactJS&nbsp;&nbsp;&nbsp;" progress={75} />
                        <Skills skill="Node" progress={80} />
                        <Skills skill="Express" progress={70} />
                        <Skills skill="Git Version" progress={90} />
                   </Cell>

               </Grid>
            </div>
        )
    }
}
export default Resume