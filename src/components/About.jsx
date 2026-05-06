const About = () => {
  return (
    <div className="about-area about-area1 section-padding" id="about">
      <div className="container">
        <div className="row reverse-row">
          <div className="col-lg-12" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div className="heading white aboutus-head">
              <strong className="filltext filltext-aboutus">Discover</strong>
              <small>About Me</small>
              <h2>My <span>Professional </span>Journey</h2>
              <p className="P-Strong">
                <strong>Full Stack Developer</strong> with 6 years of experience building scalable web applications using modern <b>JavaScript</b> frameworks like <b>React</b> and <b>Angular</b>. Skilled in developing <b>RESTful APIs</b>, database integration, and end-to-end application development. Strong background in Agile environments with focus on performance, clean code, user-centric solutions, and quality assurance.
              </p>

              <div className="row">
                <div className="col-sm-6 col-lg-6" data-aos="zoom-in">
                  <h2><span className="heading_size">Core Competencies</span></h2>
                  <ol className="pl-4">
                    <li className="p-2 h2_font">Full Stack Web Development</li>
                    <li className="p-2 h2_font">RESTful API Design & Integration</li>
                    <li className="p-2 h2_font">Frontend Development (React, Angular, JavaScript, HTML, CSS)</li>
                    <li className="p-2 h2_font">Quality Assurance & Testing</li>
                    <li className="p-2 h2_font">UI/UX Design (Figma)</li>
                  </ol>
                </div>

                 <div className="col-sm-6 col-lg-6" data-aos="zoom-in">
                  <h2><span className="heading_size">TECHNICAL SKILLS</span></h2>
                  <ol className="pl-4">
                    <li className="h2_font">Languages & Frameworks:</li>
                    <p>JavaScript, React, Angular, HTML5, CSS3, Bootstrap</p>

                    <li className="mobile_padding pt-3 h2_font">Tools & Technologies:</li>
                    <p>Git, GitHub, VS Code, Postman, Figma</p>

                    <li className="mobile_padding pt-3 h2_font">Practices:</li>
                    <p>Agile/Scrum, Debugging, Code Optimization, Quality Assurance (QA)</p>
                  </ol>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About