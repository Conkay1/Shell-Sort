export default function StarRating({ stars, max = 3, size = 20 }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: max }, (_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24">
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill={i < stars ? '#E8C137' : '#DDD'}
            stroke={i < stars ? '#C4A020' : '#CCC'}
            strokeWidth="1"
          />
        </svg>
      ))}
    </div>
  )
}
