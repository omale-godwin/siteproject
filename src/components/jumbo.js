import React from 'react'
import afi from '../../static/images/afr.jpg'

const Jumbo = () => {
    return (
      <div style={{  
          opacity: 1,
        backgroundImage: `url(${afi})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:'400px',
        color: "white",
        margin:' 0 auto',
        textAlign:"center"

      }}  >
          <div style={{position:"absolute", color:"white"}}>
          <div className="hero-content">
            <br/><br/><br/>
                            <h1 style={{color:"white"}} className="hero-heading light-weight"> africa’s largest Project Repository HelpDesk </h1>
                            <br/><br/>
                        

                            <form style={{display: "inline", marginTop:"0em"}} method="GET" action="">
                                <div className="input-group">
                                    <input style={{ width: '70%', color: "darkblue", backgroundColor: "white"}} type="text" name="search" id="search" className="form-control form-control-lg" placeholder="Enter topic or keywords and search" />

                                   
                                        <button style={{height: 40}} type="submit" className="btn btn-primary btn-lg"><i className="fa fa-search"></i></button>
                                   
                                </div>
                            </form>

                        <br/><br/>
                                      
                            <ul className="hero-footnote mt-3" style={{color :'green', backgroundColor:"white", fontSize: '20px'}}>
                                
                                <li>fget your well research and supervised final year project report and seminar material chapter 1 - 5 with source code for computer science and seminar defence </li>
          
                            </ul>
                        </div>
              </div>
              </div>
 
    )
}
export default Jumbo;