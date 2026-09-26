import { useState } from 'react'
import GUNS from '../data/guns.js'
import GunCard from '../components/GunCard.jsx'

function Catalog() {
  const [selectedType, setSelectedType] = useState('All')
  const types = ['All', ...new Set(GUNS.map((gun) => gun.type))]
  const visibleGuns = selectedType === 'All'
    ? GUNS
    : GUNS.filter((gun) => gun.type === selectedType)

  return (
    <>
      <section className="masthead">
        <h1 className="display">Hardware, by the spec sheet.</h1>
        <p className="lede">
          A small armory of pistols, rifles, and shotguns. Every piece listed with its
          type, caliber, and price — nothing else.
        </p>
      </section>

      <section>
        <div className="list-head">
          <h2>Current stock</h2>
          <span className="count">{visibleGuns.length} pieces</span>
        </div>
        <div className="type-filters" aria-label="Filter by weapon type">
          {types.map((type) => (
            <button
              className={`type-filter${selectedType === type ? ' active' : ''}`}
              key={type}
              type="button"
              aria-pressed={selectedType === type}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <ul className="stock">
          {visibleGuns.map((gun) => <GunCard key={gun.name} gun={gun} />)}
        </ul>
      </section>
    </>
  )
}

export default Catalog
