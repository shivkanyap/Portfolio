import React from 'react'
import {Tabs,Tab ,Grid,Cell,Card,CardActions,CardTitle,CardMenu,Button,IconButton, CardText} from 'react-mdl'
class Project  extends React.Component

{
    constructor(props)
    {
        super(props)
        this.state={
            activeTab:0
        }
        
    
    }
    toggleCategories()
        {
            if(this.state.activeTab===0)
            {
                return(
                    <div className="Project-grid">
                    <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                        <CardTitle style={{color:'#fff',height:'176px',background:
                        'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png)center/ cover'}}>React Project</CardTitle>
                        <CardText>Calculator </CardText>
                        <CardActions border>
                            <Button colored>
                                <a href="https://github.com/shivkanyap/Calculator">Github</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>

                        </CardMenu>
                        

                    </Card>

                     <Card shadow={5} style={{minWidth:'450',margin:'auto'}}>
                     <CardTitle style={{color:'#fff',height:'176px',background:
                     'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png)center/ cover'}}>React Project</CardTitle>
                     <CardText>Ticket Master </CardText>
                     <CardActions border>
                         <Button colored>
                             <a href="https://github.com/shivkanyap/ticket-master">Github</a>
                         </Button>
                     </CardActions>
                     <CardMenu style={{color:'#fff'}}>
                         <IconButton name="share"/>

                     </CardMenu>
                     

                 </Card>
                   </div>
                )
            }
            else if(this.state.activeTab===1)
            {
                return(
                    <Card shadow={1} style={{minWidth:'450',margin:'auto'}}>
                        <CardTitle style={{color:'#fff',height:'176px',background:'url(https://aplusweb.design/wp-content/uploads/2017/11/html5-and-css3.png)center/ cover'}}>Html/Css</CardTitle>
                        <CardText> Pratice example on Html</CardText>
                        <CardActions border>
                            <Button>
                                <a href="https://github.com/shivkanyap/loginform-with-html" >Github</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>

                        </CardMenu>


                    </Card>
                )
            }
            else if(this.state.activeTab===2)
            {
                return(
                    <div className="Project-grid">
                         <Card shadow={1} style={{minWidth:'450',margin:'auto'}}>
                        <CardTitle style={{color:'#fff',height:'176px',background:
                        'url(https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png)center/ cover'}}>Html/Css</CardTitle>
                        <CardText> Notes App</CardText>
                        <CardActions border>
                            <Button>
                                <a href="https://github.com/shivkanyap/notes-app" >Github</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>

                        </CardMenu>


                    </Card>
                    <Card shadow={1} style={{minWidth:'450',margin:'auto'}}>
                        <CardTitle style={{color:'#fff',height:'176px',background:
                        'url(https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png)center/ cover'}}>Html/Css</CardTitle>
                        <CardText> Contact-Manager</CardText>
                        <CardActions border>
                            <Button>
                                <a href="https://github.com/shivkanyap/contact-manager-backend" >Github</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>

                        </CardMenu>


                    </Card>
                    <Card shadow={1} style={{minWidth:'450',margin:'auto'}}>
                        <CardTitle style={{color:'#fff',height:'176px',background:
                        'url(https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png)center/ cover'}}>Html/Css</CardTitle>
                        <CardText> Contact-Manager</CardText>
                        <CardActions border>
                            <Button>
                                <a href="https://github.com/shivkanyap/employee-app" >Github</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>

                        </CardMenu>


                    </Card>
                        
                        

                    </div>
                )
            }
            else if(this.state.activeTab===3){
                return(
                    <div className="Project-grid">

                        <Card shadow={1} style={{minWidth:'450',margin:'auto'}}>
                        <CardTitle style={{color:'#fff',height:'176px',background:
                        'url(https://i.pinimg.com/236x/fa/e8/62/fae862fff4f6100d000a1c01c4030db0--logo-branding-branding-design.jpg)center/ cover'}}>Html/Css</CardTitle>
                        <CardText> Contact-Manager</CardText>
                        <CardActions border>
                            <Button>
                                <a href="https://github.com/shivkanyap/contact-manager" >Github</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>

                        </CardMenu>


                    </Card>
                    </div>
                )
            }
            else{
               return(
                   <div>

                        <Card shadow={1} style={{minWidth:'450',margin:'auto'}}>
                        <CardTitle style={{color:'#fff',height:'176px',background:
                        'url(http://www.bahaiutrecht.nl/wp-content/uploads/2016/03/js-logo.png)center/ cover'}}>Html/Css</CardTitle>
                        <CardText> Javascript Programs</CardText>
                        <CardActions border>
                            <Button>
                                <a href="https://github.com/shivkanyap/Javascript-interview-pratices" >Github</a>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name="share"/>

                        </CardMenu>


                    </Card> 
                   </div>
               )
            }

        }
    // handletab=(tabid)=>{
    //     this.setState({activeTab:tabid})

    // }
    
    render()
    {
        return(
            <div className="c-tabs">
                {/* <h1>About  Page</h1> */}
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Html/css</Tab>
                    <Tab>Node</Tab>
                    <Tab>FullStack</Tab>
                    <Tab>JS</Tab>
                   
                    </Tabs>
                <section >
                    <Grid >
                        <Cell col={12}>
        <div className="content">{this.toggleCategories}</div>

                        </Cell>
                    </Grid>
                    {this.toggleCategories()}
                </section>
            </div>

        )
    }
}
export default Project