export default function Card({
  image,
  alt,
  title,
  location,
  links,
  note,
  cardType = 'spot'
}) {
  const getCardStyles = () => {
    switch (cardType) {
      case 'food':
        return {
          border: 'border-yellow-300',
          bg: 'bg-yellow-50'
        }
      case 'rain':
        return {
          border: 'border-blue-300',
          bg: 'bg-blue-50'
        }
      default:
        return {
          border: 'border-gray-300',
          bg: 'bg-white'
        }
    }
  }

  const styles = getCardStyles()

  return (
    <div className={`rounded-xl overflow-hidden border-2 ${styles.border} ${styles.bg} shadow-sm hover:shadow-md transition-shadow`}>
      {image && (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = 'https://images.unsplash.com/photo-1617138275290-f30743bab77e?w=800&q=80'
          }}
          className="w-full h-40 sm:h-48 object-cover"
        />
      )}
      <div className="p-3 sm:p-4">
        <h3 className="font-bold text-sm sm:text-base mb-2 text-gray-800">
          {title}
        </h3>
        {location && (
          <p className="text-xs sm:text-sm text-gray-600 mb-3">
            {location}
          </p>
        )}
        {links && (
          <div className="flex flex-wrap gap-2 mb-3">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded text-xs font-semibold text-white no-underline transition-colors ${
                  link.type === 'google'
                    ? 'bg-primary hover:bg-primary/90'
                    : link.type === 'naver'
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-orange-500 hover:bg-orange-600'
                }`}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
        {note && (
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed border-l-2 border-secondary pl-3 py-2 bg-white bg-opacity-50">
            {note}
          </p>
        )}
      </div>
    </div>
  )
}
