import Shelf from './Shelf.jsx'

export default function ShelfGrid({ shelves, onTapShelf }) {
  // 4 shelves → 4 columns; 5–6 shelves → 3 columns (2 rows)
  const cols = shelves.length <= 4 ? shelves.length : 3

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: 8,
    }}>
      {shelves.map((shells, i) => (
        <Shelf key={i} shells={shells} shelfIndex={i} onTap={onTapShelf} />
      ))}
    </div>
  )
}
