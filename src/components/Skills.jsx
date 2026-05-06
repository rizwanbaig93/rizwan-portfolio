const experiences = [
  {
    period: 'Apr 2025 - Present',
    role: 'React Developer',
    company: 'ChatCLB',
    points: [
      'Developed: Enhanced backend services using Python, improving system performance and maintainability.',
      'Built: Integrated RESTful APIs and supported React-based frontend features for dynamic user interfaces.',
      'Utilized: Python for backend logic, data processing, and API handling.',
      'ree releases.',
      'Collaborated: With frontend teams working on React to deliver seamless end-to-end features.',
      'Debugged: Resolved production issues across Python backend and React frontend to improve system stability.',
    ],
  },
  {
    period: 'Oct 2024 - Mar 2025',
    role: 'Full Stack Developer',
    company: 'American Airlines',
    points: [
      'Developed: Full stack web applications using React and Angular for dynamic and responsive user interfaces.',
      'Built: Maintained backend services and APIs to support scalable applications.',
      'Integrated: Frontend and backend systems to ensure seamless data flow across applications.',
      'Designed: Reusable UI components and improved application performance.',
      'Worked: Across the full stack including frontend, backend, and database operations.',
      'Collaborated: With Agile teams to deliver high-quality features and enhancements.',
      'Optimized: Debugged applications for performance and scalability.',
    ],
  },
  {
    period: 'Mar 2020 - Sep 2024',
    role: 'Junior Web Developer',
    company: 'UtoR Solutions Pvt.LTD',
    points: [
      'Developed: Responsive web interfaces using React, HTML, CSS, and JavaScript with focus on usability and clean design.',
'Designed: UI/UX layouts and prototypes using Figma to improve user experience and design consistency.',
'Integrated: Connected frontend applications with RESTful APIs to render dynamic content and improve user interaction.',
'Built: Reusable UI components to support scalable frontend architecture.',
'Assisted: Backend integration tasks to enable smooth communication between client and server systems.',
'Performed: Testing and Quality Assurance (QA) to ensure bug-free and high-performance applications.',
'Optimized: Application performance and cross-browser compatibility to ensure consistent user experience across devices.',
    ],
  },
]

const skillCircles = [
  { img: '/skills images/html.png', name: 'Html5', cls: 'circle1' },
  { img: '/skills images/css.png', name: 'Css3', cls: 'circle2' },
  { img: '/skills images/bootstrap.png', name: 'Bootstrap', cls: 'circle3' },
  { img: '/skills images/sass.png', name: 'Sass', cls: 'circle4' },
  { img: '/skills images/javascript.png', name: 'JavaScript', cls: 'circle4 javascript_image' },
  { img: '/skills images/react.png', name: 'React', cls: 'circle4' },
  { img: '/skills images/angular.png', name: 'Angular', cls: 'circle4 anular_image' },
  { img: '/skills images/figma.png', name: 'Figma', cls: 'circle4' },
]

const Skills = () => {
  return (
    <div className="skill-area section-padding" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="heading white">
              <strong className="filltext">carrer</strong>
              <small>MY EXPERIENCE</small>
              <h2>Experience and <span>skill</span></h2>
            </div>
          </div>
        </div>

        <div className="space-30"></div>

        <div className="row">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`col-sm-6 col-lg-6 ${index === 2 ? 'skill_margin_top' : ''}`}
              data-aos="zoom-in"
            >
              <div className="skill-box">
                <small>{exp.period}</small><br />
                <small>{exp.role}</small>
                <h5>{exp.company}</h5>
                <p>
                  {exp.points.map((point, i) => (
                    <span key={i}>• {point}<br /></span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-100"></div>

      <div className="skill__circles">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            {skillCircles.map((skill, index) => (
              <div key={index} className="text-center" data-aos={index % 2 === 0 ? 'zoom-out' : 'zoom-in'}>
                <div className={`${skill.cls} circle`}>
                  <img src={skill.img} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills