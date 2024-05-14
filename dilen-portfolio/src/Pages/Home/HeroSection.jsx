export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm George Dilen</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color" style={{color:"blue"}}>Full Stack Developer</span>{" "}
            <br />
            {/* Developer */}
          </h1>
          <p className="hero--section-description">
          I am third-year undergraduate of the Faculty of Engineering, University of Ruhuna. I am reading for a BSc. (Hons.) Degree in Computer Engineering.
            {/* <br /> Dolorum, quas. Amet soluta assumenda cum? */}
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img" style={{width:"20vw", height:"70vh",marginLeft: "10vw"}}>
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
