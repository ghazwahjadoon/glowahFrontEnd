import React from 'react'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Cover from './Cover'
import Services from './Services'
import Booking from './Booking'
import Aboutus from './Aboutus'


import Login from './Login'
import Signin from './Signin'

function Home() {
  return (

  <>  
  <div className='container-fluid ' >
       <div className='row'>
          <div className='col'>
            {/* <Login/> */}
              {/* <Navbar/> */}
               {/* /* <Services/> */ }
               {/* <Booking/>
                <Aboutus/>
                <Signin/> 
              */}
          </div>
       </div>
       <div className='row' >
         <div className='col'>
              <Cover/>
         </div>

       </div>
        <div className='row'  >
         <div className='col'>
            <Gallery/>
         </div>

       </div>
     
        <div className='row'>
         <div className='col'>
             
            
            {/* <Footer/> */}
         </div>

       </div> 


  </div>
  
  
   
    </>
  );
}

export default Home
