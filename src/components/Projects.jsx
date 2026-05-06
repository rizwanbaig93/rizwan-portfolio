const projects = [
  { name: 'Taxi Van', link: 'https://taxivan.azurewebsites.net/', cls: 'card' },
  { name: 'Grait', link: 'https://grait.app/', cls: 'card grit-card' },
  { name: 'Umile', link: 'https://umile-dev.azurewebsites.net/', cls: 'card umile-card' },
  { name: 'Utor Digital', link: 'https://utordigital.com/', cls: 'card utor-card' },
]

const Projects = () => {
  return (
    <div className="project-area section-padding" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="heading white">
              <strong className="filltext">projects</strong>
              <small>WORKING PROCESS</small>
              <h2>Latest working <span>project</span></h2>
            </div>
          </div>
        </div>
        <div className="space-30"></div>
        <div className="projects-carousel-wrapper">
          {projects.map((project, index) => (
            <a key={index} className="card_a carousel-item-project"
               href={project.link} target="_blank" rel="noreferrer"
               style={{ flex: '1 1 calc(25% - 15px)', minWidth: '200px' }}
               data-aos="zoom-in-down">
              <div className={project.cls}>
                <div className="overlay"></div>
                <div className="content-cards">
                  <div className="title">{project.name}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects