import { useState } from 'react'
import useInView from '../../hooks/useInView'
import './GalleryPage.css'

const WORKS = [
  {
    id: 1,
    tag: 'Urban Planning — Master Model',
    title: 'City Boulevard: A Living Street at Scale',
    desc: 'A fully illuminated urban master model capturing a complete boulevard district — roundabout circulation, palm-lined avenues, residential blocks, and pedestrian life. Built to showcase a real mixed-use development proposal.',
    date: 'Jan 2026',
    img: '/gallery-urban.jpg',
    cls: 'gallery-card--feature',
  },
  {
    id: 2,
    tag: 'Residential — Villa Model',
    title: 'Contemporary Villa: Form, Detail & Site Context',
    desc: 'A precision exhibition model of a modern villa with decorative laser-cut façade panels, landscaped site, street lighting, and miniature vehicles — presented on an illuminated display plinth.',
    date: 'Dec 2025',
    img: '/gallery-villa.jpg',
    cls: 'gallery-card--tall',
  },
  {
    id: 3,
    tag: 'Hospitality — Hotel Complex',
    title: 'Hotel Quarter: Massing, Landscape & Night Glow',
    desc: 'An aerial-perspective model of a boutique hotel complex with arched façades, pergola structures, pool amenity, and full exterior lighting — conveying the warmth and scale of the guest experience.',
    date: 'Nov 2025',
    img: '/gallery-hotel.jpg',
    cls: 'gallery-card--tall-2',
  },
  {
    id: 4,
    tag: 'Interior — Residential Cut-Section',
    title: 'Open-Plan Residence: Room-by-Room Interior Study',
    desc: 'A cut-away section model revealing every room of a two-storey home — furnished bedrooms, bathroom fixtures, kitchen, staircase, and storage — illuminated to simulate real ambient living conditions.',
    date: 'Oct 2025',
    img: '/gallery-interior.jpg',
    cls: 'gallery-card--wide',
  },
  {
    id: 5,
    tag: 'Commercial — Floor Plan Study',
    title: 'Multi-Unit Floor Plate: Overhead Plan Model',
    desc: 'A top-down cross-section model of a full commercial floor plate — individual suites, meeting rooms, shared corridors, and lobby spaces rendered with warm interior lighting and furnished to scale.',
    date: 'Sep 2025',
    img: '/gallery-floorplan.jpg',
    cls: 'gallery-card--panorama',
  },
]

const STUDY_CARD = {
  icon: '◈',
  title: 'Our Model Craft',
  desc: 'Every model in our studio is hand-assembled and precision lit. Five project types — villas, hotels, urban plans, interiors, and floor plates — one uncompromising standard.',
  avatars: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDWBy2YkGjDVmGNlnxfsZkab5NUkPw6n3v_Ve050jh9BBCrCx2a0-_3Ld2YjH1MsluQSgL86phOHLxNT0IHlbx3mZWYJGG0cPqAAkmRw5GRsagEj6QzcJMIBbatafcGkpsWFsttRTLFO8JtKVZeAmldFowEbwoq7xUmJIVOAi4znExxOndWO9TbdlzyGVyZ0rvuJJydjYN3tF0iItP7rQP3FPTH2T3xlpWT1caH60WU52VJOV5qUzegPvppv98lBb4NdgNPeivvR8K8',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC4de3D7CcI_2kIkTVnmTCVh2j6fs2aZjIWfplcOhC8qewHNK6dxBO_T0icyul8U34rScPYULsjeaU6j7cDmoCBQ3Ao-nVwKIE91fFUrnJysx9HCVqC6EOE64zATnuMILzwW0DTStvOZivrpjlaaElLbTCkcmMymfjcfB6KoVF1guvBTuY6hLdOBln3KWhJSqcg49HLz-EFz7LYA4BZuAWgn2yur8V_ejd0RaAH7VztI2q1QB1O4sBClXyDOhstT_M9L45Xplmn3qEX',
  ],
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const { ref, visible } = useInView(0.05)

  return (
    <div className="gallery page-enter">
      {/* Header */}
      <div className="gallery__header">
        <div className="gallery__header-top">
          <span className="gold-line" />
          <span className="section-eyebrow">Level 04 — Project Archive</span>
        </div>
        <h1 className="gallery__header-title">
          Real Models, <em>Real Scale</em>
        </h1>
        <p className="gallery__header-desc">
          A curated selection of physical architectural scale models — from single-villa
          exhibition pieces to full urban boulevard masterplans — crafted with precision
          lighting, landscaping, and miniature detail.
        </p>
      </div>
      {/* Masonry grid */}
      <div className="gallery__grid" ref={ref}>
        {WORKS.map((work) => (
          <div
            key={work.id}
            className={`gallery-card ${work.cls} ${visible ? 'visible' : ''}`}
          >
            <div className="gallery-card__img-wrap">
              <img
                className="gallery-card__img"
                src={work.img}
                alt={work.title}
                loading="lazy"
              />
            </div>
            <div className="gallery-card__overlay" />
            <div className="gallery-card__content">
              <p className="gallery-card__tag">{work.tag}</p>
              <p className="gallery-card__date">{work.date}</p>
              <h2 className="gallery-card__title">{work.title}</h2>
              <p className="gallery-card__desc">{work.desc}</p>
              <span className="gallery-card__cta">Enter View →</span>
            </div>
          </div>
        ))}

        {/* Study card — no image */}
        <div className={`gallery-card gallery-card--study ${visible ? 'visible' : ''}`}>
          <div className="gallery-card__study-icon">{STUDY_CARD.icon}</div>
          <h2 className="gallery-card__title">{STUDY_CARD.title}</h2>
          <p className="gallery-card__desc">{STUDY_CARD.desc}</p>
          <div className="gallery-card__avatars">
            {STUDY_CARD.avatars.map((src, i) => (
              <img key={i} className="gallery-card__avatar" src={src} alt="Team member" />
            ))}
            <div className="gallery-card__avatar-count">+4</div>
          </div>
        </div>
      </div>
    </div>
  )
}
