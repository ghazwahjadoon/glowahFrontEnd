import 'bootstrap/dist/css/bootstrap.min.css';
import Nikkahlook1 from './assets/Nikkahlook1.jpg';
import Nikkahlook2 from './assets/Nikkahlook2.jpg';
import Nikkahlook3 from './assets/Nikkahlook3.jpg';
import Nikkahlookn from './assets/Nikkahlookn.jpg'
import Bride7 from './assets/Bride7.jpg';
import Bride4 from './assets/Bride4.jpg';
import Bride6 from './assets/Bride6.jpg';
import B1 from './assets/Barat1.jpg'
import B2 from './assets/Barat2.jpg'
import B3 from './assets/Barat3.jpg'
import B4 from './assets/Bride2.jpg'
import B5 from './assets/Bride5.jpg';
import bg from './assets/bg.jpg'
import { Link } from 'react-router-dom';
function Services() {
  const NikkahLooks = [
    { id: 1, name: 'Blossom Look', image: Nikkahlook1 },
    { id: 2, name: 'Soft Blossom Look', image: Nikkahlookn},
    { id: 3, name: 'Elegant Nikkah Glam', image: Nikkahlook3 },
    { id: 4, name: 'Elegant Nikkah Glam', image: Bride7},
    { id: 5, name: 'Elegant Nikkah Glam', image: Bride4},
    { id: 6, name: 'Elegant Nikkah Glam', image: Bride6},
  ];
  const BaratLooks=[
    {id:1,name:'Signature Bridal look',image: B1},
     {id:2,name:'Soft Glowy Dewy',image: B2},
      {id:3,name:'Radiance',image: B3},
       {id:4,name:'Artistic Makeup Look',image:B4},
        {id:5,name:'Artistic Makeup Look',image:B5},
         {id:6,name:'Artistic Makeup Look',image:bg},
       
  ]
   const handleBookNow = (lookName) => {
    console.log(`Booking for: ${lookName}`);
  };



  return (
    <>
      <div className="container-fluid">
        <h1 style={{ fontFamily: "Bradley Hand ITC", textAlign: "center" }}>
          OUR SERVICES
        </h1>
        <p style={{ fontFamily: "Bradley Hand ITC", textAlign: "center" }}>
          Discover the perfect look for every occasion
        </p>

        <hr style={{ color: "palevioletred" }} />

        

        <div className="container-fluid">
          <div className="row">
            {NikkahLooks.map((look) => (
              <div
                key={look.id}
                className="col-12 col-sm-12 col-md-6 col-lg-4 mb-2 d-flex justify-content-center"
              >
                <div className="card" style={{ width: "28rem"}}>
                  <img src={look.image} className="card-img-top" alt={look.name}  style={{
    height: "550px",
    objectFit: "cover",
  }} />
                  <div className="card-body text-center ">
                    <p className="card-text" style={{ fontFamily: "Bradley Hand ITC" }}>
                      {look.name}
                    </p>
                    <Link to="/Booking"  ><button type="button" className="btn btn-outline-dark" onClick={() => handleBookNow(look.name)}>BOOK NOW</button></Link> 
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
       
         <div className="container-fluid">
          <div className="row">
            {BaratLooks.map((look) => (
              <div
                key={look.id}
                className="col-12 col-sm-12 col-md-6 col-lg-4 mb-2 d-flex justify-content-center"
              >
                <div className="card" style={{ width: "28rem"}}>
                  <img src={look.image} className="card-img-top" alt={look.name} style={{
    height: "500px",
    objectFit: "cover",
  }}/>
                  <div className="card-body text-center ">
                    <p className="card-text" style={{ fontFamily: "Bradley Hand ITC" }}>
                      {look.name}
                    </p>
                   <Link to="/Booking"  ><button type="button" className="btn btn-outline-dark" onClick={() => handleBookNow(look.name)}>BOOK NOW</button></Link> 
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </>
  );
}

export default Services;
