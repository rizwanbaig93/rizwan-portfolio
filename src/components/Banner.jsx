import { useEffect, useRef } from 'react'

const slides = [
  "Unleashing creativity, shaping digital landscapes. Elevate your brand with bespoke design.",
  "Code with Precision, Design with Passion, Crafting Seamless Digital Experiences.",
  "Empowering brands through intuitive design. Elevating user experiences with flair.",
  "Transforming ideas into immersive digital realities. Your vision, our expertise, unmatched results.",
  "Designing the future, pixel by pixel. Where innovation meets user delight, every click matters.",
  "Building bridges between brands and audiences through captivating design languages.",
]

const imgClasses = [
  'item-img-one', 'item-img-two', 'item-img-three',
  'item-img-four', 'item-img-five', 'item-img-six'
]

const Banner = () => {
  const bannerRef = useRef(null)
  const intervalRef = useRef(null)

  const activate = (direction) => {
    const items = bannerRef.current.querySelectorAll('.item')
    if (direction === 'next') {
      bannerRef.current.append(items[0])
    } else {
      bannerRef.current.prepend(items[items.length - 1])
    }
  }

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      activate('next')
    }, 4000)
  }

  const stopAutoplay = () => {
    clearInterval(intervalRef.current)
  }

  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
  }, [])

  const handleNext = () => {
    activate('next')
    stopAutoplay()
    startAutoplay()
  }

  const handlePrev = () => {
    activate('prev')
    stopAutoplay()
    startAutoplay()
  }

  return (
    <div className="container-d banner-slider pb-4" id="home" 
  style={{ height: window.innerWidth < 768 ? '40vh' : '95vh', color: 'white' }}>
      <main>
        <ul className="banner" ref={bannerRef}>
          {slides.map((text, index) => (
            <li key={index} className={`item item-img ${imgClasses[index]}`}>
              <div className="content content-card">
                <h2 className="title">{text}</h2>
              </div>
            </li>
          ))}
        </ul>
        <nav className="nav">
          <ion-icon className="btn prev" name="arrow-back-outline" onClick={handlePrev}></ion-icon>
          <ion-icon className="btn next" name="arrow-forward-outline" onClick={handleNext}></ion-icon>
        </nav>
      </main>
    </div>
  )
}

export default Banner