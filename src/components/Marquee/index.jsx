import './Marquee.css'

function Marquee() {
  const items = [
    "4+ years experience",
    "8+ projects",
    "5 rating",
    "product designer"
  ]

  // We repeat the items a few times to ensure the strip never runs out of content before looping
  const duplicatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="marquee-item">
            <span>
              {item === "5 rating" ? (
                <>
                  5 
                  <svg className="marquee-star" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg> 
                  rating
                </>
              ) : (
                item
              )}
            </span>
            <div className="marquee-dot"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Marquee
