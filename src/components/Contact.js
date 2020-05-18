import React from 'react'
import {Grid,Cell,List,ListItem
,ListItemContent} from 'react-mdl'

class Contact  extends React.Component
{
    render()
    {
        return(
            <div className="contact-body">
                <Grid className="contact-grids">
                    <Cell col={6}>
                        <h2>Shivakanya</h2>
                        
                         <img
                        src={require('../assests/IMG_2121.JPG')}
                        alt="avatar"
                        style={{height: '250px'}}/>
                        <p className="intro" >If you have any vacancy that suits my technical skill set,
                             you can contact me by using any of the links.</p>
                        
                        


                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className='contact-list'>
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true">831-741-8780</i>
                                   
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                     <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                         <i className="fa fa-envelope" aria-hidden="true">
                                             shivkanyapatil51gmail.com</i>
                                   
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true">live:.cid.d6620276a15793c1</i>
                                   
                                </ListItemContent>
                            </ListItem>
                            </List>
                        </div>
                        
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}
export default Contact