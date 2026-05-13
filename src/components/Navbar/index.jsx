import { useState, useEffect } from 'react'
import Magnetic from '../Magnetic'
import './Navbar.css'

function Navbar() {
  const [isDark, setIsDark] = useState(true)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('light-mode')
  }

  const navItems = ['Work', 'About', 'Contact']

  return (
    <nav className={`navbar ${isHidden ? 'navbar-hidden' : ''}`}>
      <div className="navbar-left">
        <Magnetic>
          <span className="logo">ST.</span>
        </Magnetic>
      </div>

      <div className="navbar-center">
        {navItems.map((item) => (
          <Magnetic key={item}>
            <a href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          </Magnetic>
        ))}
      </div>

      <div className="navbar-right">
        <Magnetic>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </Magnetic>

        <Magnetic>
          <div className="hire-btn-wrapper">
            <div className="hire-btn-slider">
              <div className="hire-btn-panel">
                <span>Hire Me</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <div className="hire-btn-panel">
                <a href="mailto:shivamforsure20@gmail.com" className="hire-inner-link">Email</a>
                <span className="hire-inner-divider">/</span>
                <a href="https://www.linkedin.com/in/shivam-tiwari-b81820226/" target="_blank" rel="noopener noreferrer" className="hire-inner-link">LinkedIn</a>
              </div>
            </div>
          </div>
        </Magnetic>
      </div>
    </nav>
  )
}

export default Navbar
