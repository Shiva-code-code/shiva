import React from 'react'

import mark from '../../images/projects/markdownpreviewer.png'
import twist from '../../images/projects/Student-community.png'
class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <>
            <div className="container" id='projects'>
                <div className='row m-1 justify-content-center'>
                    <div className='col mt-5'>
                        <h2>Recent Projects</h2>
                    </div>
                    <div className='w-100'></div>
                    <div className='col-lg-4 m-1 border rounded p-3 shadow'>
                        <a href={twist}><img src={twist} className="img-fluid shadow rounded" /></a>

                        <a href="https://studentcommunity.vercel.app" ><h4 className='mt-2'>Student Community(Full Stack)</h4></a>
                        
                    </div>
                    <div className='col-lg-4 m-1 border rounded p-3 shadow'>
                        <a href={mark}><img src={mark} className="img-fluid shadow rounded" /></a>

                        <a href="https://taher-1822001.github.io/Markdown-Previewer/"><h4 className='mt-2' >Markdown Previewer</h4></a>
                     
                    </div>
                   
                </div>
            </div>
            </>
        )
    }
}

export default Projects;