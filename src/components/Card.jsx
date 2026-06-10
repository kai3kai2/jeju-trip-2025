export default function Card({
  image,
  alt,
  title,
  location,
  links,
  note,
  cardType = 'spot'
}) {
  const getCardClass = () => {
    switch (cardType) {
      case 'food':
        return 'card-food'
      case 'rain':
        return 'card-rain'
      default:
        return 'card-spot'
    }
  }

  const getLinkClass = (type) => {
    switch (type) {
      case 'naver':
        return 'bn'
      case 'tmap':
      case 'rain':
        return 'bt'
      default:
        return 'bg'
    }
  }

  return (
    <div className={getCardClass()}>
      {image && (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = 'https://images.unsplash.com/photo-1617138275290-f30743bab77e?w=800&q=80'
          }}
          className="w-full h-auto block"
        />
      )}
      <div className="cb">
        <div className="cn">{title}</div>
        {location && (
          <div className="ca">{location}</div>
        )}
        {links && (
          <div className="cl">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={getLinkClass(link.type)}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
        {note && (
          <div className="note">{note}</div>
        )}
      </div>
    </div>
  )
}
