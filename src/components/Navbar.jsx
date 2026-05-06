import { useEffect } from 'react'

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const goTop = document.querySelector('.go-top')
      if (goTop) {
        if (window.scrollY > 200) {
          goTop.style.display = 'block'
        } else {
          goTop.style.display = 'none'
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    
    <div className="header-area header-main sticky" id="header">
      <a className="go-top" onClick={scrollToTop} style={{ display: 'none', cursor: 'pointer' }}></a>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand logo" href="#">
          <img src="/Assets_files/logo1.png" alt="Logo" className="img-fluid" />
        </a>
         
        <div className="container-nav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
          </ul>
          <div className="collapse navbar-collapse"></div>
        </div>
        <form className="social-site">
            <div className="d-flex gap-3 align-items-center">
  <div className="icon-detail" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
   <i className="fa-solid fa-envelope"></i>
    <a href="mailto:rizwanbaig0093@gmail.com">rizwanbaig0093@gmail.com</a>
  </div>
  <div className="icon-detail" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
    <i className="fa-brands fa-linkedin"></i>
    <a href="https://www.linkedin.com/in/rizwan-baig-6b6844353/" target="_blank" rel="noreferrer">LinkedIn</a>
  </div>
</div>
          </form>
      </nav>
    </div>
  )
}

export default Navbar