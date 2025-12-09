import haily from "./assets/haily.webp";
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdCall, MdLocationOn } from "react-icons/md";
import "./Aboutus.css";

function Aboutus() {
  return (
    <>
      
      <section className="about-header text-center py-4">
        <h1 className="about-title">WE ARE GLOWAH, YOUR TRUST</h1>
        <hr className="about-divider" />
      </section>

      
      <section className="container about-intro my-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="about-text">
              Welcome to <b>Glowah Beauty</b>, your all-in-one beauty destination — 
              where glam meets confidence! 💫 We’re more than just a makeup brand — 
              we’re a full beauty experience. From luxurious makeup products you’ll 
              fall in love with, to our professional parlour services that bring your 
              dream look to life, Glowah Beauty is all about helping you shine in your 
              own style. 🌸 <br /><br />
              Whether it’s your bridal makeover, party glam, or a self-love day, our 
              talented artists are here to make you glow brighter than ever.  
              At Glowah Beauty, every face tells a story — and we’re here to make yours unforgettable.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={haily}
              alt="Glowah Studio"
              className="img-fluid rounded-4  about-image"
            />
          </div>
        </div>
      </section>

      
      <section className="about-vision py-5 text-center">
        <h2 className="vision-title">Our Vision</h2>
        <p className="vision-text">
          Our vision is simple yet ambitious: to create the largest community of beauticians 
          and beauty services in the world. We aim to redefine the beauty experience, 
          making it accessible, convenient, and inclusive for everyone. Through innovation, 
          creativity, and community engagement, we're shaping the future of beauty — one 
          appointment at a time. <br /><br />
          We dream of building a world where beauty is not just seen — it’s felt, shared, 
          and celebrated. Our mission goes beyond makeup; it’s about empowering individuals, 
          supporting local beauticians, and bridging the gap between talent and opportunity. 
          <br /><br />
          Driven by innovation and fueled by creativity, Glowah Beauty is redefining what it 
          means to feel beautiful — with authenticity, confidence, and connection at its heart.
        </p>
      </section>

     
      <section className="about-contact py-5 text-center">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-text">
          Makeup celebrates diversity; it’s not about hiding flaws, but highlighting your 
          unique beauty. Whether it’s a bold red lip, a soft glow, or a touch of shimmer, 
          makeup gives everyone the freedom to express who they truly are.  
          At <b>Glowah Beauty</b>, we believe makeup isn’t a mask — it’s your magic.
        </p>

        <div className="contact-icons">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
          <FaWhatsapp />
          <MdCall />
          <MdLocationOn />
        </div>
      </section>
    </>
  );
}

export default Aboutus;
